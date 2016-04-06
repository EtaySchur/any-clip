/**
 * Created by EtaySchur on 06/04/2016.
 */
'use strict';


(function(){
    angular.module('anyclipDemoApp')
        .constant('appApi', {
            VIDEO : '/api/videos',
            COMMENTS_BY_VIDEO : 'api/comments/video',
            RATING_BY_VIDEO : 'api/ratings/video',
            RATING : '/api/ratings',
            COMMENT : '/api/comments'
        })

})();