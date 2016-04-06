/**
 * Created by EtaySchur on 06/04/2016.
 */
'use strict';


(function(){
    angular.module('anyclipDemoApp')
        .constant('appApi', {
            VIDEO : '/api/videos',
            RATING : '/api/ratings',
            COMMENT : '/api/comments',
            RATING_BY_VIDEO : 'api/ratings/video',
            COMMENTS_BY_VIDEO : 'api/comments/video'
        })

})();