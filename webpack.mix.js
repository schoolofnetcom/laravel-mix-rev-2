let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
   //.webpackConfig({})
   .js('resources/assets/js/front/app.js', 'public/js/front.js')
   .js('resources/assets/js/admin/app.js', 'public/js/admin.js')
   .sass('resources/assets/sass/app.scss', 'public/css/')
   .less('resources/assets/less/app.less', 'public/css/css-less.css')
   .copy('resources/assets/img/photo.txt', 'public/p.txt')
   .copyDirectory('resources/assets/img', 'public/img')
   .scripts([
       'resources/assets/js/arquivo1.js',
       'resources/assets/js/arquivo2.js',
   ], 'public/js/all.js')
   .styles([
       'resources/assets/css/arquivo1.css',
       'resources/assets/css/arquivo2.css',
   ], 'public/css/all.css')
   .sourceMaps()
   .extract(['vue'])
   .browserSync('localhost:8000');

if (mix.inProduction()) {
    mix.version();
}

// mix.disableNotifications();
