'use strict';

describe('Component: VideoDetailsComponent', function () {

  // load the controller's module
  beforeEach(module('anyclipDemoApp'));

  var VideoDetailsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VideoDetailsComponent = $componentController('VideoDetailsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
