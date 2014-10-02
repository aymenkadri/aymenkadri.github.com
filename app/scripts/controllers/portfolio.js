'use strict';

/**
 * @ngdoc function
 * @name aymenkadrigithubcomApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the aymenkadrigithubcomApp
 */
angular.module('aymenkadrigithubcomApp')
    .controller('PortfolioCtrl', function ($rootScope, $location, $window) {
        $window._gaq.push(['_trackEvent', 'HEAD', 'Portfolio']);
        $rootScope.title = 'Portfolio';
    });
