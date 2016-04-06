'use strict';

angular.module('anyclipDemoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/video', {
        template: '<video></video>'
      });
  });
