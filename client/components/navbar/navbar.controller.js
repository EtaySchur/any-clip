'use strict';

class NavbarController {
  //start-non-standard


  isCollapsed = true;
  //end-non-standard

  constructor($location) {
    this.$location = $location;
    }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('anyclipDemoApp')
  .controller('NavbarController', NavbarController);
