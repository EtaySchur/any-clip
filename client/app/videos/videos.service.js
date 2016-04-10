'use strict';

angular.module('anyclipDemoApp')
  .service('videosService', function ( $http , appApi ) {
        var promise = null, videosService;
        videosService = {
            getAllVideos: function() {
                return [
                    {
                        "_id" : ObjectId("5704cd288a0c366596518825"),
                        "title" : "The Matrix",
                        "description" : "Really Nice Movie",
                        "createdAt" : "1.1.2016",
                        "videoLink" : "http://vjs.zencdn.net/v/oceans.mp4",
                        "thumbnailUrl" : "http://vjs.zencdn.net/v/oceans.png"
                    },
                    {
                        "_id" : ObjectId("5704dd6d8a0c366596518826"),
                        "title" : "Jungle - Live ! ",
                        "description" : "Best Show In Bonarro Festival !",
                        "createdAt" : "1.1.2016",
                        "videoLink" : "http://static.videogular.com/assets/videos/videogular.mp4",
                        "thumbnailUrl" : "http://www.videogular.com/assets/images/videogular.png"
                    },
                    {
                        "_id" : ObjectId("57055d5f8a0c366596518827"),
                        "videoLink" : "http://html5videoformatconverter.com/data/images/happyfit2.mp4",
                        "title" : "Sky Fall",
                        "description" : "Very Cool Movie",
                        "thumbnailUrl" : "http://html5videoformatconverter.com/data/images/screen.jpg"
                    }
                ];

                //// $http returns a promise, which has a then function, which also returns a promise
                //promise = $http.get(appApi.VIDEO).then(function (response) {
                //    // The then function here is an opportunity to modify the response
                //    // The return value gets picked up by the then in the controller.
                //    return response.data;
                //});
                //// Return the promise to the controller
                //return promise;
            },
            getVideoData : function ( videoId) {
                // $http returns a promise, which has a then function, which also returns a promise
                promise = $http.get(appApi.VIDEO + '/' + videoId).then(function (response) {
                    // The then function here is an opportunity to modify the response
                    // The return value gets picked up by the then in the controller.
                    return response.data;
                });
                // Return the promise to the controller
                return promise;
            }

        };
        return videosService;
  });
