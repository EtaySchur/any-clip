'use strict';
(function(){

class VideosComponent {
  constructor(videosService , ratingService , commentsService , $location , notificationService) {
            this.videos = [];
            this.videosService = videosService;
            this.ratingService = ratingService;
            this.commentsService = commentsService;
            this.$location = $location;
            this.notificationService = notificationService;

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
            var self = this;
            this.rate = rate;
            // Enhance Rate Data
            var rateEntity = {
                rate : rate,
                videoId : this.selectedVideo._id
            };

            this.ratingService.addVideoRating(rateEntity).then(function(result){
                self.notificationService.success('Your Rating has been saved  \n Thank You :)')
            }).catch(function(err){
                self.notificationService.error('Oops .. \n Something Wrong happen \n Please try again later  \n Thank You :)')
            });
        };

        commentVideo( commentText ){
            var self = this;
            // Enhance Comment Data
            var commentEntity = {
                text : commentText,
                videoId : this.selectedVideo._id
            };

            this.commentsService.addVideoComment(commentEntity).then(function(result){
                self.notificationService.success('Your comment has been saved  \n Thank You :)')
            }).catch(function(err){
                self.notificationService.error('Oops .. \n Something Wrong happen \n Please try again later  \n Thank You :)')
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
