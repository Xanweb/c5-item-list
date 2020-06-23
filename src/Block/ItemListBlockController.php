<?php
namespace Xanweb\ItemList\Block;

use Concrete\Core\Block\BlockController as CoreBlockController;
use Concrete\Core\Cache\Level\ExpensiveCache;
use Concrete\Core\Database\Connection\Connection;
use Concrete\Core\Editor\LinkAbstractor;
use Concrete\Core\Support\Facade\Application;
use Doctrine\DBAL\Types\Type;
use Illuminate\Support\Collection;

abstract class ItemListBlockController extends CoreBlockController
{
    /**
     * Item List table: list of fields and other list prepared of insert query.
     *
     * @var array
     */
    private $itemListTableFields = [];

    /**
     * @var \Illuminate\Support\Collection
     */
    protected $items;

    /**
     * @var Connection
     */
    private $connection;

    /**
     * @var ExpensiveCache
     */
    private $cache;

    /**
     * Return Items table name.
     */
    abstract protected function getItemListTable(): string;

    /**
     * {@inheritdoc}
     *
     * @see CoreBlockController::load()
     */
    protected function load()
    {
        parent::load();

        $this->loadItems();
    }

    /**
     * Load items.
     */
    protected function loadItems(): void
    {
        $app = Application::getFacadeApplication();
        $cache = $this->cache();
        $cacheItem = $cache->getItem(sprintf('block/%s/items', $this->bID));

        $isCacheEnabled = $this->cacheBlockRecord() && $app['config']->get('concrete.cache.blocks');
        if ($isCacheEnabled && $this->btCachedBlockRecord && !$cacheItem->isMiss()) {
            $this->items = $cacheItem->get();
        } else {
            $db = $this->database();
            $qb = $db->createQueryBuilder()->select('*')->from($this->getItemListTable());
            $qb->where($qb->expr()->eq('bID', ':bID'))->setParameter('bID', $this->bID);
            $this->items = Collection::make($qb->execute()->fetchAll());

            if ($isCacheEnabled) {
                $cacheItem->setTTL($this->btCacheBlockOutputLifetime ?? (60 * 60 * 24 * 90)); // 3 months if no cache life time is defined
                $cache->save($cacheItem->set($this->items));
            }
        }

        $this->set('items', $this->items);
    }

    /**
     * Items table: load and get list of fields and other list prepared of insert query.
     *
     * @param string $prop (optional) can be FIELD_TYPE, DEFAULT, NOTNULL, QUERY_PLACE_HOLDER,
     */
    private function getItemListTableProps($prop = ''): array
    {
        $cache = $this->cache();
        if (empty($this->itemListTableFields)) {
            $item = $cache->getItem(sprintf('block/%s/2nd-table-cols', $this->btHandle));
            if (!$item->isMiss()) {
                $this->itemListTableFields = $item->get();
            } else {
                $db = $this->database();
                $columns = $db->getSchemaManager()->listTableColumns($this->getItemListTable());
                foreach ($columns as $column) {
                    if (!$column->getAutoincrement()) {
                        $this->itemListTableFields[$column->getName()] = [
                            'FIELD_TYPE' => $column->getType()->getName(),
                            'DEFAULT' => $column->getDefault(),
                            'NOTNULL' => $column->getNotnull(),
                            'QUERY_PLACE_HOLDER' => ":{$column->getName()}",
                        ];
                    }
                }

                $item->setTTL(60 * 60 * 24 * 30); // 30 Days
                $cache->save($item->set($this->itemListTableFields));
            }
        }

        if (!empty($prop)) {
            return array_combine(
                array_keys($this->itemListTableFields),
                array_column($this->itemListTableFields, $prop)
            );
        }

        return $this->itemListTableFields;
    }

    /**
     * {@inheritdoc}
     *
     * @see CoreBlockController::duplicate()
     */
    public function duplicate($newBID)
    {
        parent::duplicate($newBID);

        $insertFields = $this->getItemListTableProps('QUERY_PLACE_HOLDER');
        $this->database()->transactional(function (Connection $db) use ($insertFields, $newBID) {
            $qb = $db->createQueryBuilder()
                ->insert($this->getItemListTable())
                ->values($insertFields);

            foreach ($this->items as $item) {
                $item['bID'] = $newBID;
                (clone $qb)->setParameters($item)->execute();
            }
        });
    }

    /**
     * {@inheritdoc}
     *
     * @see CoreBlockController::delete()
     */
    public function delete()
    {
        $this->deleteItems();

        parent::delete();
    }

    /**
     * Delete second table items.
     */
    private function deleteItems(): void
    {
        $qb = $this->database()->createQueryBuilder();
        $qb->delete($this->getItemListTable())
            ->where($qb->expr()->eq('bID', ':bID'))
            ->setParameter('bID', $this->bID)->execute();

        $this->cache()->delete(sprintf('block/%s/items', $this->bID));

        unset($this->items);
    }

    /**
     * {@inheritdoc}
     * Automatically save second table data.
     *
     * @see CoreBlockController::save()
     */
    public function save($args)
    {
        parent::save($args);

        $this->deleteItems();

        $sanitizedData = $this->sanitizeData($args);
        if (empty($sanitizedData)) {
            return;
        }

        $insertFields = $this->getItemListTableProps('QUERY_PLACE_HOLDER');
        $this->database()->transactional(function (Connection $db) use ($sanitizedData, $insertFields) {
            $qb = $db->createQueryBuilder()
                ->insert($this->getItemListTable())
                ->values($insertFields);

            foreach ($sanitizedData as $item) {
                (clone $qb)->setParameters($item)->execute();
            }
        });

        $this->loadItems();
    }

    public function validate($args)
    {
        $e = $this->app->make('helper/validation/error');
        $sanitizedData = $this->sanitizeData($args);

        foreach ($sanitizedData as $i => $item) {
            $this->validateItem($i + 1, $item, $e);
        }

        return $e;
    }

    /**
     * Check if the item is valid.
     *
     * @param int $itemNbr
     * @param array $item
     * @param \Concrete\Core\Error\ErrorList\ErrorList $e
     */
    protected function validateItem($itemNbr, $item, $e): bool
    {
        return true;
    }

    /**
     * Prepare Second Table Fields Data before saving them to database.
     *
     * @param $data
     *
     * @return array sanitized array
     */
    private function sanitizeData($data): array
    {
        $sanitizedData = [];
        $itemDefaults = $this->getItemDefaults();
        $fieldsTypes = $this->getItemListTableProps('FIELD_TYPE');

        foreach ($fieldsTypes as $field => $type) {
            if ($field === 'bID' || !isset($data[$field])) {
                continue;
            }

            foreach ($data[$field] as $i => $v) {
                if (!isset($sanitizedData[$i])) {
                    // Init Row with defaults data
                    $sanitizedData[$i] = $itemDefaults;
                }
                $sanitizedData[$i][$field] = $this->sanitizeVal($field, $type, $v);
            }
        }

        return $sanitizedData;
    }

    /**
     * Get Row default Values from Table Schema.
     */
    protected function getItemDefaults(): array
    {
        $itemDefaults = ['bID' => $this->bID];
        foreach ($this->getItemListTableProps() as $field => $properties) {
            if ($field === 'bID') {
                continue;
            }

            $itemDefaults[$field] = $this->sanitizeVal($field, $properties['FIELD_TYPE'], $properties['DEFAULT']);
        }

        return $itemDefaults;
    }

    /**
     * Prepare Second Table Field Value before saving it to database.
     *
     * @param $field
     * @param $type
     * @param $value
     *
     * @return mixed sanitized value
     */
    protected function sanitizeVal($field, $type, $value)
    {
        switch ($type) {
            case Type::INTEGER:
            case Type::SMALLINT:
                $sanitizedVal = (int) $value;
                break;
            case Type::STRING:
                $sanitizedVal = trim((string) $value);
                break;
            case Type::TEXT:
                $sanitizedVal = (string) $value;
                // Check if is Html
                if ($sanitizedVal !== strip_tags($sanitizedVal)) {
                    $sanitizedVal = LinkAbstractor::translateTo($sanitizedVal);
                }

                break;
            case Type::BOOLEAN:
                $sanitizedVal = $value ? 1 : 0;
                break;
            default:
                $sanitizedVal = $value;
        }

        return $sanitizedVal;
    }

    /**
     * Get list of items sorted by given fields.
     *
     * @param array $sort ['col1' => 'ASC', 'col2' => 'DESC']
     */
    public function getItems(array $sort = []): array
    {
        if (!$this->items) {
            return [];
        }

        if (!empty($sort)) {
            $sortedItems = $this->items;

            foreach ($sort as $col => $dir) {
                $sortedItems = $sortedItems->sortBy($col, SORT_REGULAR, strtoupper($dir) === 'DESC');
            }

            return array_values($sortedItems->toArray());
        }

        return array_values($this->items->toArray());
    }

    private function database(): Connection
    {
        if (!$this->connection) {
            $app = $this->app ?? Application::getFacadeApplication();
            $this->connection = $app->make('database/connection');
        }

        return $this->connection;
    }

    private function cache(): ExpensiveCache
    {
        if (!$this->cache) {
            $app = $this->app ?? Application::getFacadeApplication();
            $this->cache = $app->make('cache/expensive');
        }

        return $this->cache;
    }
}
