'use strict';
(function(){

class VideosComponent {
  constructor(videosService) {
            this.videos = [];
            this.videosService = videosService;

  }
        $onInit() {
            var self = this;
            this.videosService.getVideos().then(function(result){
                console.log("Get VIDEOS API RESULT ",result);
                self.videos = result;
                if(self.videos.length > 0){
                    self.selectedVideo = self.videos[0];
                    self.mediaObj = {
                        sources: [
                            {
                                src: self.selectedVideo.videoLink,
                                type: 'video/mp4'
                            }
                        ],
                        poster: self.selectedVideo.thumbnailUrl
                    }
                }
            }).catch(function(err){

            });
    }

        rateVideo( rate ){
            console.log("My Rate ",rate);
        }


}

angular.module('anyclipDemoApp')
  .component('videos', {
    templateUrl: 'app/videos/videos.html',
    controller: VideosComponent,
    controllerAs : 'VideosCtrl'
  });

})();
