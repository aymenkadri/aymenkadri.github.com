'use strict';

/**
 * @ngdoc function
 * @name aymenkadrigithubcomApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aymenkadrigithubcomApp
 */
angular.module('aymenkadrigithubcomApp')
    .controller('AboutCtrl', function ($scope, $location, $window) {
        $window._gaq.push(['_trackEvent', $location.path(), "Click"]);
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
