<?php
namespace Xanweb\ItemList\Controller;

use Concrete\Core\Controller\Controller;
use Concrete\Core\Http\ResponseFactoryInterface;
use Symfony\Component\HttpFoundation\Response;

class JavascriptAssetDefaults extends Controller
{
    public function getJavascript(): Response
    {
        $content = 'window.xanweb = $.extend(' . json_encode([
            'i18n' => [
                'confirm' => t('Are you sure?'),
                'maxItemsExceeded' => t('Max items exceeded, You can not add any more items.'),
                'pageNotFound' => t('Page not found'),
            ],
            'editor' => [
                'initRichTextEditor' => '###initRichTextEditor###',
                'destroyRichTextEditor' => '###destroyRichTextEditor###',
            ],
        ], JSON_UNESCAPED_SLASHES) . ', window.xanweb || {});';

        $app = $this->app;
        $config = $app->make('config');
        $initRichTextEditor = $config->get('xanweb.item_list.editor.initRichTextEditorJSFunc', function () use ($app) {
            return $app['editor']->getEditorInitJSFunction();
        });

        $destroyRichTextEditor = $config->get('xanweb.item_list.editor.destroyRichTextEditorJSFunc', function () {
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

        $content = str_replace([
            '"###initRichTextEditor###"',
            '"###destroyRichTextEditor###"',
        ], [$initRichTextEditor, $destroyRichTextEditor], $content);

        return $this->createJavascriptResponse($content);
    }

    private function createJavascriptResponse(string $content): Response
    {
        $rf = $this->app->make(ResponseFactoryInterface::class);

        return $rf->create(
            $content,
            200,
            [
                'Content-Type' => 'application/javascript; charset=' . APP_CHARSET,
                'Content-Length' => strlen($content),
            ]
        );
    }
}
