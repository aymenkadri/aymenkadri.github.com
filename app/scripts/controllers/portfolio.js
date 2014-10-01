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
        $window.ga.push(['_trackEvent', 'HEAD', 'Portfolio']);
        $scope.title = 'Portfolio';
    });
