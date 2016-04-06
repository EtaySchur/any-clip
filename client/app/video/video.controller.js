'use strict';
(function(){

class VideoComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('anyclipDemoApp')
  .component('video', {
    templateUrl: 'app/video/video.html',
    controller: VideoComponent
  });

})();
