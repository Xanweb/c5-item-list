const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        symlinks: false
    },
    externals: {
        jquery: 'jQuery'
    }
})

mix.options({
    processCssUrls: false
})

mix.setPublicPath('..')

mix
    .sass('assets/sass/item-list.scss', 'css/item-list.css')
    .js('assets/js/item-list/index.js', 'js/item-list.js');

mix
    .sass('assets/sass/gallery.scss', 'css/gallery.css')
    .js('assets/js/gallery/index.js', 'js/gallery.js');

mix.disableNotifications()

// Disable mix-manifest.json
// @see https://github.com/JeffreyWay/laravel-mix/issues/580
Mix.manifest.refresh = _ => void 0;
