'use strict';

angular.module('ge', [])
  .controller('offcanvasButtonController', ['$scope', '$rootScope', function( $scope, $rootScope ) {

    $scope.toggleOffCanvasOpen = function() {
      $rootScope.$apply(function() {
        $rootScope.showOffCanvas = !$rootScope.showOffCanvas;
      });
    };

  }])
  .controller('overlayController',['$scope', '$rootScope', function( $scope, $rootScope ) {

    $scope.toggleOverlay = function() {
      $rootScope.$apply(function() {
        $rootScope.showOverlay = !$rootScope.showOverlay;
      });
    };

  }])
  .directive('overlay', function() {
    return {
      restrict  : 'A',
      require   : ['^?offcanvasButton'],
      controller: 'overlayController',
      link      : function( scope, element, attrs ) {

        element.bind('click', function( evt ) {
          scope.toggleOffCanvasOpen();
          scope.toggleOverlay();
        });

      }
    };
  })
  .directive('offcanvasButton', function() {
    return {
      restrict  : 'A',
      controller: 'offcanvasButtonController',
      require   : ['^?overlay'],
      link      : function( scope, element, attrs ) {

        element.bind('click', function( evt ) {
          scope.toggleOffCanvasOpen();
          scope.toggleOverlay();
        });

      }
    };
  })
  .run(['$rootScope', function( $rootScope ) {
    $rootScope.showOffCanvas = false;
    $rootScope.showOverlay   = false;
  }]);
