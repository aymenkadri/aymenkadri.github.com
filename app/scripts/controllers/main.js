'use strict';

/**
 * @ngdoc function
 * @name aymenkadrigithubcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aymenkadrigithubcomApp
 */
angular.module('aymenkadrigithubcomApp')
    .controller('MainCtrl', function ($scope, $location, $window) {
        $scope.title = 'Home';
        $window.ga.push(['_trackEvent', 'HEAD', 'Main']);
    });
