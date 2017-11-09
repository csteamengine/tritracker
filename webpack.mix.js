let mix = require('laravel-mix');
mix.disableNotifications();
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

mix.autoload({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
    }).js('resources/assets/js/app.js', 'public/js');
   //  .sass('node_modules/bootstrap/scss/bootstrap.scss', 'public/css')
   //  .sass('node_modules/node-waves/src/scss/waves.scss', 'public/css')
   //  .sass('node_modules/animate.scss/vendor/assets/stylesheets/animate.scss', 'public/css')
   // .js('node_modules/jquery/dist/jquery.min.js', 'public/js')
   // .js('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js')
   // .js('node_modules/bootstrap-select/dist/js/bootstrap-select.min.js', 'public/js')
   // .js('node_modules/jquery-slimscroll/jquery.slimscroll.min.js', 'public/js')
   // .js('node_modules/node-waves/dist/waves.min.js', 'public/js')
   // .js('node_modules/jquery-countto/jquery.countTo.js', 'public/js')
   // .js('node_modules/raphael/raphael.min.js', 'public/js')
   // .js('node_modules/morris.js/morris.min.js', 'public/js')
   // .js('node_modules/chart.js/dist/Chart.bundle.min.js', 'public/js')
   // .js('node_modules/jquery-flot/jquery.flot.js', 'public/js')
   // .js('node_modules/jquery-flot/jquery.flot.resize.js', 'public/js')
   // .js('node_modules/jquery-flot/jquery.flot.pie.js', 'public/js')
   // .js('node_modules/jquery-flot/jquery.flot.categories.js', 'public/js')
   // .js('node_modules/jquery-flot/jquery.flot.time.js', 'public/js')
   // .js('node_modules/jquery-sparkline/jquery.sparkline.min.js', 'public/js')
   // .js('resources/assets/js/demo.js', 'public/js')
   // .js('resources/assets/js/pages/index.js', 'public/js/pages')
   // .js('resources/assets/js/admin.js', 'public/js');
