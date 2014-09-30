'use strict';

/**
 * @ngdoc function
 * @name aymenkadrigithubcomApp.controller:DownloadCtrl
 * @description
 * # DownloadCtrl
 * Controller of the aymenkadrigithubcomApp
 */
angular.module('aymenkadrigithubcomApp')
    .controller('DownloadCtrl', function ($scope, $location, $window) {
        $window._gaq.push(['_trackEvent', "HEAD", "Download"]);
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
