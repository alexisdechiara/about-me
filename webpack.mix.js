let mix = require('laravel-mix');

mix.sass('src/sass/main.sass', 'assets/css/main.css')
    .sass('src/sass/bootstrap/bootstrap.scss', 'assets/css/bootstrap.css')
    .ts('src/ts/main.ts', 'assets/js/main.js')
    .ts('src/ts/bootstrap.ts', 'assets/js/bootstrap.js')
    .sourceMaps();
