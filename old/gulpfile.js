/*
* NPM Package Requirements
*/
var elixir = require('laravel-elixir');

/* Laravel Elixir Package Settings */
//Setting the folder path for the assets (javscscript and scss/css) source folder
elixir.config.assetsPath = 'src';
//Setting the folder path for the assets (javscscript and css) distribution folder
elixir.config.publicPath = 'dist';

elixir(function(mix) {
    mix.browserify('app.js')
        .sass("plain.scss")
        .sass("colorful.scss")
        .sass("morning-gray.scss")
        .sass("pinky.scss")
        .sass("sea-green.scss")
        .sass("sea-blue.scss")
        .sass("paper.scss")
        //copy the bootstrap fonts into the dist directory as well
        .copy('node_modules/bootstrap-sass/assets/fonts', elixir.config.publicPath + '/fonts');
});