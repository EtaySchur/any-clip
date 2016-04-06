'use strict';

angular.module('anyclipDemoApp', [
    'anyclipDemoApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'vjs.video'
])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/videos'
            });

        $locationProvider.html5Mode(true);
    });
