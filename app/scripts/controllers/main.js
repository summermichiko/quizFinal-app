'use strict';

/**
 * @ngdoc function
 * @name quizFinalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizFinalApp
 */
angular.module('quizFinalApp')
	.controller('MasterCtrl', function($scope, $http) {
		$scope.scopeName = "MasterCtrl";
		$scope.score = { value: 0 };
		$http.get('http://localhost:3000/').success(function(data) {
			$scope.quiz = data;
		});
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

	  	$scope.addQuestion = function() {
	  		// $scope.newQuestion.difficulty = +$scope.newQuestion.difficulty;
	  		$scope.newQuestion = { options: [] };
	  	};

	  	$scope.checkAnswer = function(selectedValue, question) {
	  		if(selectedValue === question.answer) {
	  			$scope.score.value++;
	  			// $rootScope.$broadcast("messageChange", "You got it right!");
	  		}
	  		question.answered = true;
	  	};
  	})





