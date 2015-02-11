'use strict';

angular.module('ge', [])
  .controller('offcanvasButtonController', ['$scope', '$rootScope', function( $scope, $rootScope ) {

    $scope.toggleOffCanvasOpen = function() {
      $rootScope.$apply(function() {
        $rootScope.offcanvasOpened ? $rootScope.offcanvasOpened = false : $rootScope.offcanvasOpened = true;
      })
    };

  }])
  .directive('overlay', function() {
    return {
      restrict  : 'A',
      require   : ['^?offcanvasButton'],
      link      : function( scope, element, attrs ) {

        element.bind('click', function( evt ) {
          scope.toggleOffCanvasOpen();
        });

      }
    };
  })
  .directive('offcanvasButton', function() {
    return {
      restrict  : 'A',
      controller: 'offcanvasButtonController',
      link      : function( scope, element, attrs ) {

        element.bind('click', function( evt ) {
          scope.toggleOffCanvasOpen();
        });

      }
    };
  })
  .run(['$rootScope', function( $rootScope ) {
    $rootScope.offcanvasOpened = false;
  }]);
