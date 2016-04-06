(function(angular, undefined) {
'use strict';

angular.module('anyclipDemoApp.constants', [])

.constant('appApi', {
        VIDEO : '/api/videos',
        RATING : '/api/ratings',
        COMMENT : '/api/comments',
        RATING_BY_VIDEO : 'api/ratings/video'
    })

;
})(angular);