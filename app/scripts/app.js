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
    'ngRoute',
    'ui.utils'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new_question', {
        templateUrl: 'views/add_question.html',
        controller: 'QuestionFormCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
