define(['angularAMD', 'angularRoute', 'angularMaterial'], function (angularAMD) {

    var app = angular.module('sett-site-login', ['ngRoute', 'ngMaterial']);

    app.config(function ($routeProvider, $locationProvider, $mdThemingProvider) {

        //Set the theme colours
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-purple')
            .accentPalette('deep-orange');

        //Route login otherwise 404
        $routeProvider.when('/login/', angularAMD.route({
            templateUrl: 'login/templates/controllers/login.html',
            controller: 'login',
            controllerUrl: 'controllers/login'
        }))
        .otherwise(angularAMD.route({
            templateUrl: 'login/templates/controllers/file-not-found.html',
            controller: 'file-not-found',
            controllerUrl: 'controllers/file-not-found'
        }));

        //Remove the hash from the url routing
        $locationProvider.html5Mode(true);
    });

    //Change to the remote API to use for authorisation
    app.apiUrl = 'http://api.imaginarium.getsett.net';

    app.controller('body', function ($scope) {
        $scope.pageLoaded = true;
    });

    return angularAMD.bootstrap(app);
});
