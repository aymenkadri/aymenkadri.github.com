'use strict';

/**
 * @ngdoc function
 * @name aymenkadrigithubcomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aymenkadrigithubcomApp
 */

angular.module('aymenkadrigithubcomApp')
    .controller('FooterCtrl', ['$rootScope','$window',
    function ($rootScope, $window) {

        $rootScope.twitter = function () {
            $window._gaq.push(['_trackEvent', 'Footer', 'Twitter']);
        };
        $rootScope.linkedin = function () {
            $window._gaq.push(['_trackEvent', 'Footer', 'Linkedin']);
        };
        $rootScope.viadeo = function () {
            $window._gaq.push(['_trackEvent', 'Footer', 'Viadeo']);
        };
        $rootScope.github = function () {
            $window._gaq.push(['_trackEvent', 'Footer', 'Github']);
        };

    }]);
