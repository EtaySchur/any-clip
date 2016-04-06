(function(angular, undefined) {
'use strict';

angular.module('anyclipDemoApp.constants', [])

.constant('appApi', {
        GET_VIDEOS : '/api/videos',
        RATING : '/api/ratings',
        COMMENT : '/api/comments'
    })

;
})(angular);