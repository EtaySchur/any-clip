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

            function compare(a,b) {
                if (a.avgRating < b.avgRating)
                    return 1;
                else if (a.avgRating > b.avgRating)
                    return -1;
                else
                    return 0;
            }

            this.videosService.getAllVideos().then(function(result){
                self.videos = result;
                var counter = 0;
                self.videos.forEach(function(video){
                    self.ratingService.getVideoRating(video._id).then(function( avgRate ){
                        video.avgRating = avgRate[0].rateAvg;
                        counter++;
                        if(counter === self.videos.length){
                            self.videoSelected( self.videos.sort(compare)[0]);
                            console.log("This is my selected Video ",self.selectedVideo);
                        };
                    })
                });
            })
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
            console.log('Selecting Video !'  , video);
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
