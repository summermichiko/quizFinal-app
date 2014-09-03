'use strict';

/**
 * @ngdoc function
 * @name quizFinalApp.controller:MessagesCtrl
 * @description
 * # MessagesCtrl
 * Controller of the quizFinalApp
 */
angular.module('quizFinalApp')
  .controller('MessagesCtrl', function ($scope) {
    $scope.scopeName = "MessagesCtrl";
    $scope.$on("messageChange", function(event, newMsg) {
    	$scope.message = newMsg;
    });
  });
