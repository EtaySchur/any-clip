'use strict';
(function(){

class VideosComponent {
  constructor(videosService , ratingService , commentsService , $location ) {
            this.videos = [];
            this.videosService = videosService;
            this.ratingService = ratingService;
            this.commentsService = commentsService;
            this.$location = $location;

  }
        $onInit() {
            var self = this;
            this.videosService.getAllVideos().then(function(result){
                self.videos = result;

                self.videos.forEach(function(video){
                    self.ratingService.getVideoRating(video._id).then(function( avgRate ){
                        video.avgRating = avgRate;
                    })
                });
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

            this.ratingService.addVideoRating(rateEntity).then(function(result){
            }).catch(function(err){

            });
        };

        commentVideo( commentText ){
            console.log("Commenting");
            // Enhance Comment Data
            var commentEntity = {
                text : commentText,
                videoId : this.selectedVideo._id
            };

            this.commentsService.addVideoComment(commentEntity).then(function(result){

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

        navToSelectedVideo (){
            this.$location.url('videos/' + this.selectedVideo._id);
        }





    }

angular.module('anyclipDemoApp')
  .component('videos', {
    templateUrl: 'app/videos/videos.html',
    controller: VideosComponent,
    controllerAs : 'VideosCtrl'
  });

})();
