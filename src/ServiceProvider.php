<?php
namespace Xanweb\ItemList;

use Concrete\Core\Asset\AssetList;
use Concrete\Core\Foundation\Service\Provider as CoreServiceProvider;
use Concrete\Core\Support\Facade\Route;
use Xanweb\ExtAsset\Asset\VendorAssetManager;
use Xanweb\ItemList\Route\RouteList;

class ServiceProvider extends CoreServiceProvider
{
    public function register(): void
    {
        $router = Route::getFacadeRoot();
        $router->loadRouteList($this->app->build(RouteList::class));

        $this->registerAssets();
    }

    protected function registerAssets(): void
    {
        VendorAssetManager::registerMultiple([
            'xw/item-list' => [
                ['vendor-javascript', 'js/item-list.js', 'xanweb/c5-item-list', ['minify' => false]],
                ['vendor-css', 'css/item-list.css', 'xanweb/c5-item-list', ['minify' => false]],
            ],
        ]);

        $al = AssetList::getInstance();
        $al->register('javascript-localized', 'xw/item-list/defaults', '/xw/item-list/js/defaults.js');

        VendorAssetManager::registerGroupMultiple([
            'xw/item-list' => [
                [
                    ['javascript', 'jquery'],
                    ['javascript', 'underscore'],
                    ['javascript-localized', 'xw/item-list/defaults'],
                    ['vendor-javascript', 'xw/item-list'],
                    ['vendor-css', 'xw/item-list'],
                ],
            ],
        ]);
    }
}
