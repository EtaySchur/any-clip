'use strict';
(function(){

class VideosComponent {
  constructor(videosService , ratingService , $scope ) {
            this.videos = [];
            this.videosService = videosService;
            this.ratingService = ratingService;

  }
        $onInit() {
            var self = this;
            this.videosService.getVideos().then(function(result){
                console.log("Get VIDEOS API RESULT ",result);
                self.videos = result;
                if(self.videos.length > 0){
                    self.videoSelected(self.videos[0]);

                }
            }).catch(function(err){

            });
    }

        rateVideo( rate ){
            this.rate = rate;
            // Enhance Rate Data
            var rateEntity = {
                rate : rate,
                videoId : this.selectedVideo._id
            };

            this.ratingService.addRating(rateEntity).then(function(result){
                console.log("Add Rate Success");
            }).catch(function(err){

            });
        };

        videoSelected ( video){
            console.log('Selecting Video !');
            this.selectedVideo = video;
            this.mediaObj = {
                sources: [
                    {
                        src: this.selectedVideo.videoLink,
                        type: 'video/mp4'
                    }
                ],
                poster: this.selectedVideo.thumbnailUrl
            }

        }





    }

angular.module('anyclipDemoApp')
  .component('videos', {
    templateUrl: 'app/videos/videos.html',
    controller: VideosComponent,
    controllerAs : 'VideosCtrl'
  });

})();
