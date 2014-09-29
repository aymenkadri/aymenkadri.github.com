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
        $window._gaq.push(['_trackEvent', $location.path(), "Click"]);
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
