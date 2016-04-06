'use strict';

angular.module('anyclipDemoApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main></main>'
      });
  });
