// Load modules and use them
require.config({
    baseUrl: 'js',
    paths: {
        backbone: '../../bower_components/backbone/backbone-min',
        'backbone.marionette': '../../bower_components/backbone.marionette/lib/backbone.marionette.min',
        jquery: 'https://code.jquery.com/jquery-1.11.3.min',
        underscore: '../../bower_components/underscore/underscore-min',
        handlebars: '../../bower_components/handlebars/handlebars.min'
    },
    waitSeconds: 30,
    shim: {jquery: {
          exports: '$'
        },
        underscore: {
          deps:["jquery"],
          exports: '_'
        },
        backbone: {
          deps:["jquery", 'underscore'],
          exports: 'Backbone'
        },
        'backbone.marionette': {
          deps:['backbone'],
          exports: 'Backbone.marionette'
        }
    },
    deps: ['app']
});
