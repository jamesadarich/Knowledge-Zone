// Load modules and use them
require.config({
    baseUrl: 'js',
    paths: {
        backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min',
        jquery: 'https://code.jquery.com/jquery-1.11.3.min',
        underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min'
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
        }
    },
    deps: ['app']
});
