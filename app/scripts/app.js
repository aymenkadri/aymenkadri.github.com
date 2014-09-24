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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
