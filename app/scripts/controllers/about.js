'use strict';

/**
 * @ngdoc function
 * @name quizFinalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quizFinalApp
 */
angular.module('quizFinalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
