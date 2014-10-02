'use strict';

/**
 * @ngdoc function
 * @name aymenkadrigithubcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aymenkadrigithubcomApp
 */
angular.module('aymenkadrigithubcomApp')
    .controller('MainCtrl', function ($rootScope, $location, $window) {
        $rootScope.title = 'Home';
        $window._gaq.push(['_trackEvent', 'HEAD', 'Main']);
    });
