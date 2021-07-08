let mix = require('laravel-mix');

mix.sass('src/sass/main.sass', 'assets/css/main.css')
    .ts('src/ts/main.ts', 'assets/js/main.js');
