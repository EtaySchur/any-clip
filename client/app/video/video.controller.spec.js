'use strict';

describe('Component: VideoComponent', function () {

  // load the controller's module
  beforeEach(module('anyclipDemoApp'));

  var VideoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VideoComponent = $componentController('VideoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
