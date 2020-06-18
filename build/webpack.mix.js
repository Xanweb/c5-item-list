const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        symlinks: false
    },
    externals: {
        jquery: 'jQuery',
        vue: 'Vue',
        cookie: 'Cookie'
    }
})

mix.options({
    processCssUrls: false
})

mix.setPublicPath('..')

mix.js('assets/js/item-list.js', 'js')
    .sass('assets/sass/item-list.scss', 'css')
    .disableNotifications();


// Disable mix-manifest.json
// @see https://github.com/JeffreyWay/laravel-mix/issues/580
Mix.manifest.refresh = _ => void 0;
