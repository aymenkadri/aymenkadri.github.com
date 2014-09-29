'use strict';

/**
 * @ngdoc function
 * @name aymenkadrigithubcomApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the aymenkadrigithubcomApp
 */
angular.module('aymenkadrigithubcomApp')
    .controller('PortfolioCtrl', function ($scope, $location, $window) {
        $window._gaq.push(['_trackEvent', $location.path(), "Click"]);
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
