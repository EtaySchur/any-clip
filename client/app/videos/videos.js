'use strict';

angular.module('anyclipDemoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/videos', {
        template: '<videos></videos>'
      });
  });
