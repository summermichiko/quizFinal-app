'use strict';

/**
 * @ngdoc function
 * @name quizFinalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizFinalApp
 */
angular.module('quizFinalApp')
	.controller('MasterCtrl', function($scope) {
		$scope.scopeName = "MasterCtrl";
		$scope.score = { value: 0 };
	})

	.controller('YellCtrl', function($scope, $timeout, $interval) {
		$scope.scopeName = "YellCtrl";

		$scope.timeLeft = 60;

		// var paused = false;

		// var decrementCounter = function() { //then this is called and runs recursively
		// 	$scope.timeLeft--;
		// 	if(!paused && $scope.timeLeft > 0) {
		// 		$timeout(decrementCounter, 1000);
		// 	}
		// 	// $scope.$apply(); this is not necessary when you use $timeout (angular's version of setTimeOut)
		// };
		// $timeout(decrementCounter, 1000); //this line will run first
		
		var intervalId;
		$scope.isRunning = false;

		$scope.startTimer = function() {
			// paused = false;
			// decrementCounter();
			$scope.isRunning = true;
			intervalId = $interval(function() {
				$scope.timeLeft--;
			}, 1000);
		};

		$scope.pauseTimer = function() {
			// paused = true;
			$scope.isRunning = false;
			$interval.cancel(intervalId);
		};

		$scope.restartTimer = function() {
			$scope.timeLeft = 60;
		};

	})
	.controller('QuestionCtrl', function($scope) {
		$scope.scopeName = "QuestionCtrl";

	})
  	.controller('MainCtrl', function($scope, $rootScope) {
  		$scope.scopeName = "MainCtrl";

	  	$scope.newQuestion = { options: [] };

	  	$scope.addOption = function() {
	  		$scope.newQuestion.options.push({ value: "" })
	  	};

	  	$scope.deleteOption = function() {
	  		$scope.newQuestion.options.splice(num, 1);
	  	};

	  	$scope.addQuestion = function() {
	  		$scope.newQuestion.difficulty = +$scope.newQuestion.difficulty;
	  		$scope.quiz.push($scope.newQuestion);
	  		$scope.newQuestion = { options: [] };
	  	};

	  	$scope.checkAnswer = function(selectedValue, question) {
	  		if(selectedValue === question.answer) {
	  			$scope.score.value++;
	  		}
	  		question.answered = true;
	  		$rootScope.$broadcast("messageChange", "You got it right!");
	  	};
  	})





