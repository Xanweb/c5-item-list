<?php defined('C5_EXECUTE') or die('Access Denied.');

use Concrete\Core\Asset\AssetList;
use Xanweb\ExtAsset\Asset\VendorAssetManager;

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
