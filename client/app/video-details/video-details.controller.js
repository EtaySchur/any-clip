'use strict';
(function(){

class VideoDetailsComponent {
  constructor(videosService , ratingService , $routeParams , $location) {
    this.videoId = $routeParams.videoId;
    this.videosService = videosService;
    this.ratingService =   ratingService;
    this.$location = $location;
    this.mediaObject = {};
  }

        $onInit() {
            var self = this;
            this.videosService.getVideo( this.videoId ).then(function(result){
                console.log("Get VIDEO API RESULT ",result);
                self.ratingService.getVideoRating(self.videoId).then(function(result){
                   self.avgVideoRating = result[0].rateAvg;
                }).catch(function(err){

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

            }).catch(function(err){
                self.$location.url('/videos');
            });
        }
}

angular.module('anyclipDemoApp')
  .component('videoDetails', {
    templateUrl: 'app/video-details/video-details.html',
    controller: VideoDetailsComponent,
    controllerAs : 'VideoDetialCtrl'
  });

})();
