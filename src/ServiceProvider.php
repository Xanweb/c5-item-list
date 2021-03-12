<?php

namespace Xanweb\ItemList;

use Xanweb\ExtAsset\Asset\VendorAssetManager;
use Xanweb\Foundation\Config\BeforeRenderDefaultAssetJS;
use Xanweb\Foundation\JavascriptDefaultsServiceProvider;

class ServiceProvider extends JavascriptDefaultsServiceProvider
{
    protected function _register(): void
    {
        parent::_register();

        $this->registerListeners();
        $this->registerAssets();
    }

    private function registerListeners(): void
    {
        $this->app['director']->addListener(BeforeRenderDefaultAssetJS::NAME, function (BeforeRenderDefaultAssetJS $event) {
            $event->getJavascriptAssetDefaults()->mergeWith([
                'i18n' => [
                    'confirm' => t('Are you sure?'),
                    'maxItemsExceeded' => t('Max items exceeded, you cannot add any more items.'),
                    'pageNotFound' => t('Page not found'),
                    'colorPicker' => [
                        'cancelText' => t('Cancel'),
                        'chooseText' => t('Choose'),
                        'togglePaletteMoreText' => t('more'),
                        'togglePaletteLessText' => t('less'),
                        'noColorSelectedText' => t('No Color Selected'),
                        'clearText' => t('Clear Color Selection'),
                    ]
                ],
                'editor' => [
                  'initRichTextEditor' => $this->getInitRichTextEditorJSFunction(),
                  'destroyRichTextEditor' => $this->getDestroyRichTextEditorJSFunction(),
                ],
            ]);
        });
    }

    private function getInitRichTextEditorJSFunction()
    {
        return $this->app['config']->get('xanweb.item_list.editor.initRichTextEditorJSFunc', function () {
            return $this->app['editor']->getEditorInitJSFunction();
        });
    }

    private function getDestroyRichTextEditorJSFunction()
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

    private function registerAssets(): void
    {
        VendorAssetManager::registerMultiple([
            'xw/item-list' => [
                ['vendor-javascript', 'js/item-list.js', 'xanweb/c5-item-list', ['minify' => false]],
                ['vendor-css', 'css/item-list.css', 'xanweb/c5-item-list', ['minify' => false]],
            ],
            'xw/slider-form' => [
                ['vendor-javascript', 'js/slider-form.js', 'xanweb/c5-item-list', ['minify' => false]],
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
            'xw/slider-form' => [
                [
                    ['javascript', 'jquery'],
                    ['javascript', 'underscore'],
                    ['javascript-localized', 'xw/defaults'],
                    ['vendor-javascript', 'xw/slider-form'],
                    ['vendor-css', 'xw/item-list'],
                ],
            ],
        ]);
    }
}
