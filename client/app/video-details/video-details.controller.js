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

            self.video = this.videosService.getVideoData(this.videoId);

            self.ratingService.getVideoRating(self.videoId).then(function (result) {
                self.avgVideoRating = result[0].rateAvg;
            }).catch(function (err) {

            });

            self.commentsService.getCommentsByVideo(self.videoId).then(function (result) {
                self.comments = result;
            }).catch(function (err) {

            });
            self.mediaObj = {
                sources: [
                    {
                        src: self.video.videoLink,
                        type: 'video/mp4'
                    }
                ],
                poster: self.video.thumbnailUrl
            }

            //this.videosService.getVideoData(this.videoId).then(function (result) {
            //
            //
            //}).catch(function (err) {
            //    self.$location.url('/videos');
            //});
        }
    }

    angular.module('anyclipDemoApp')
        .component('videoDetails', {
            templateUrl: 'app/video-details/video-details.html',
            controller: VideoDetailsComponent,
            controllerAs: 'VideoDetialCtrl'
        });

})();
