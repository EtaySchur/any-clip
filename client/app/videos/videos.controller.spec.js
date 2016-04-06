'use strict';

describe('Component: VideosComponent', function () {

  // load the controller's module
  beforeEach(module('anyclipDemoApp'));

  var VideosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VideosComponent = $componentController('VideosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
