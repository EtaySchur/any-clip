'use strict';
(function () {

    class
    VideoDetailsComponent
    {
        constructor(videosService, ratingService, commentsService, $routeParams, $location)
        {
            this.videoId = $routeParams.videoId;
            this.videosService = videosService;
            this.ratingService = ratingService;
            this.commentsService = commentsService;
            this.$location = $location;
            this.mediaObject = {};
        }

        $onInit()
        {
            var self = this;
            this.videosService.getVideo(this.videoId).then(function (result) {
                self.ratingService.getVideoRating(self.videoId).then(function (result) {
                    self.avgVideoRating = result[0].rateAvg;
                }).catch(function (err) {

                });

                self.commentsService.getCommentsByVideo(self.videoId).then(function (result) {
                    self.comments = result;
                    console.log("I have comments ? ",result);
                }).catch(function (err) {

                });
                self.video = result;
                self.mediaObj = {
                    sources: [
                        {
                            src: self.video.videoLink,
                            type: 'video/mp4'
                        }
                    ],
                    poster: self.video.thumbnailUrl
                }

            }).catch(function (err) {
                self.$location.url('/videos');
            });
        }
    }

    angular.module('anyclipDemoApp')
        .component('videoDetails', {
            templateUrl: 'app/video-details/video-details.html',
            controller: VideoDetailsComponent,
            controllerAs: 'VideoDetialCtrl'
        });

})();
