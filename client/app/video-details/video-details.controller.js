'use strict';
(function(){

class VideoDetailsComponent {
  constructor(videosService , $routeParams) {
    this.videoId = $routeParams.videoId;
    this.videosService = videosService;
  }

        $onInit() {
            var self = this;
            this.videosService.getVideo( this.videoId ).then(function(result){
                console.log("Get VIDEO API RESULT ",result);
                self.videos = result;
                if(self.videos.length > 0){
                    self.videoSelected(self.videos[0]);

                }
            }).catch(function(err){

            });
        }
}

angular.module('anyclipDemoApp')
  .component('videoDetails', {
    templateUrl: 'app/video-details/video-details.html',
    controller: VideoDetailsComponent
  });

})();
