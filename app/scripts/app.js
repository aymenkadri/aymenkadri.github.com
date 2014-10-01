'use strict';

/**
 * @ngdoc overview
 * @name aymenkadrigithubcomApp
 * @description
 * # aymenkadrigithubcomApp
 *
 * Main module of the application.
 */
angular
  .module('aymenkadrigithubcomApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/download', {
        templateUrl: 'views/download.html',
        controller: 'DownloadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
        $rootScope
            .$on('$stateChangeSuccess',
            function(event){

                if (!$window.ga)
                    return;

                $window.ga('send', 'pageview', { page: $location.path() });
            });
    }]);
