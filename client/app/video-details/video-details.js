'use strict';

angular.module('anyclipDemoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/videos/:videoId', {
        template: '<video-details></video-details>'
      });
  });
