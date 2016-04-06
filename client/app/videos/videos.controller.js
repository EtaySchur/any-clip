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
            }).catch(function(err){

            });
    }


}

angular.module('anyclipDemoApp')
  .component('videos', {
    templateUrl: 'app/videos/videos.html',
    controller: VideosComponent,
    controllerAs : 'VideosCtrl'
  });

})();
