'use strict';

/**
 * @ngdoc overview
 * @name quizFinalApp
 * @description
 * # quizFinalApp
 *
 * Main module of the application.
 */
angular
  .module('quizFinalApp', [ 
    'ngCookies', //these three dependencies were created with my Teoman generator
    'ngResource',
    'ngRoute'
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
