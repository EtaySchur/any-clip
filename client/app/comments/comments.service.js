'use strict';

angular.module('anyclipDemoApp')
  .service('commentsService', function (  $http , appApi ) {
        var promise = null, commentsService;
        commentsService = {
            addVideoComment: function( comment ) {
                // $http returns a promise, which has a then function, which also returns a promise
                promise = $http.post(appApi.COMMENT , comment).then(function (response) {
                    // The then function here is an opportunity to modify the response
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
                // Return the promise to the controller
                return promise;
            },
            getCommentsByVideo : function ( videoId ){
                promise = $http.get(appApi.COMMENTS_BY_VIDEO + '/' + videoId ).then(function (response) {
                    return response.data;
                });
                return promise;
            }
        };
        return commentsService;
  });
