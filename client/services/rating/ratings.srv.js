
/**
 * Created by EtaySchur on 06/04/2016.
 */

(function(){
    angular.module('anyclipDemoApp')
        .service('ratingService', function ( $http , appApi ) {
            var promise = null, ratingService;
            ratingService = {
                addRating: function( rate ) {
                    // $http returns a promise, which has a then function, which also returns a promise
                    promise = $http.post(appApi.RATING , rate).then(function (response) {
                        // The then function here is an opportunity to modify the response
                        // The return value gets picked up by the then in the controller.
                        return response.data;
                    });
                    // Return the promise to the controller
                    return promise;
                },
                getVideoRating : function (videoId){
                    promise = $http.get(appApi.RATING_BY_VIDEO + '/' + videoId).then(function (response) {
                        return response.data;
                    });
                    return promise;
                }
            };
            return ratingService;
        });
})();
