'use strict';

angular.module('ge', [])
  .directive('offcanvasButton', function() {
    return {
      restrict: 'A',
      link: function( scope, element, attrs ) {

        var body = $( 'body' );

        element.bind('click', function( evt ) {
          body.toggleClass('nav-default-opened');
        });

        body.delegate('.ge-overlay', 'click', function(evt) {
          body.toggleClass('nav-default-opened');
        });

      }
    };
  });
