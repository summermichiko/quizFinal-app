'use strict';

/**
 * @ngdoc function
 * @name quizFinalApp.controller:QuestionformCtrl
 * @description
 * # QuestionformCtrl
 * Controller of the quizFinalApp
 */
angular.module('quizFinalApp')
	.controller('QuestionFormCtrl', function ($scope, $http, $location) {

		$scope.newQuestion = { options: [{ value: ""}, { value: "" }] };

  		$scope.addOption = function($event) {
  			$event.preventDefault();
  			$scope.newQuestion.options.push({ value: '' });
  			// console.log($scope.newQuestion);
  		};

  		$scope.deleteOption = function(num) {
	  		$scope.newQuestion.options.splice(num, 1);
	  	};

		$scope.formSubmit = function() {
			$http.post('http://localhost:3000/new_question', {
				newQuestion: $scope.newQuestion})
			.success(function() {
				$http.get('http://localhost:3000/')
					.success(function(data) {
						$scope.quiz = data;
					});
			});
			$location('/');
		};

		$scope.$watchCollection("newQuestion.options", function(newVal, oldVal) {
			$scope.newQuestionForm.$setValidity("enough_options", newVal.length > 1);
		});

	});



