<?php

namespace Xanweb\ItemList;

use Concrete\Core\Foundation\Service\Provider as CoreServiceProvider;
use Xanweb\ExtAsset\Asset\VendorAssetManager;
use Xanweb\Foundation\Config\BeforeRenderDefaultAssetJS;
use Xanweb\Foundation\Config\JavascriptAssetDefaults;

class ServiceProvider extends CoreServiceProvider
{
    public function register(): void
    {
        $this->registerListeners();
        $this->registerAssets();
    }

    protected function registerListeners(): void
    {
        $this->app['director']->addListener(BeforeRenderDefaultAssetJS::NAME, function (BeforeRenderDefaultAssetJS $event) {
            JavascriptAssetDefaults::macro('mergeWith', function (array $items) {
                $this->items = array_merge($this->items, $items);
            });

            $event->getJavascriptAssetDefaults()->mergeWith([
                'i18n' => [
                  'confirm' => t('Are you sure?'),
                  'maxItemsExceeded' => t('Max items exceeded, You can not add any more items.'),
                  'pageNotFound' => t('Page not found'),
                ],
                'editor' => [
                  'initRichTextEditor' => $this->getInitRichTextEditorJSFunction(),
                  'destroyRichTextEditor' => $this->getDestroyRichTextEditorJSFunction(),
                ],
            ]);
        });
    }

    protected function getInitRichTextEditorJSFunction()
    {
        return $this->app['config']->get('xanweb.item_list.editor.initRichTextEditorJSFunc', function () {
            return $this->app['editor']->getEditorInitJSFunction();
        });
    }

    protected function getDestroyRichTextEditorJSFunction()
    {
        return $this->app['config']->get('xanweb.item_list.editor.destroyRichTextEditorJSFunc', function () {
            return <<<EOT
function (editor) {
    var id = editor.attr('id');
    if (CKEDITOR.instances[id] !== undefined) {
        CKEDITOR.instances[id].destroy();
    }
    
    editor.remove();
    $('#cke_' + id).remove();
}
EOT;
        });
    }

    protected function registerAssets(): void
    {
        VendorAssetManager::registerMultiple([
            'xw/item-list' => [
                ['vendor-javascript', 'js/item-list.js', 'xanweb/c5-item-list', ['minify' => false]],
                ['vendor-css', 'css/item-list.css', 'xanweb/c5-item-list', ['minify' => false]],
            ],
        ]);

        VendorAssetManager::registerGroupMultiple([
            'xw/item-list' => [
                [
                    ['javascript', 'jquery'],
                    ['javascript', 'underscore'],
                    ['javascript-localized', 'xw/defaults'],
                    ['vendor-javascript', 'xw/item-list'],
                    ['vendor-css', 'xw/item-list'],
                ],
            ],
        ]);
    }
}
