'use strict';

/**
 * @ngdoc function
 * @name quizFinalApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizFinalApp
 */
angular.module('quizFinalApp')
  .controller('QuizCtrl', function($scope) {
  	$scope.scopeName = "QuizCtrl";
    $scope.quiz = [{ 
		      "q": "Who is the best ping pong player at FSA?", 
		      'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
		      'answer': "Nimit", 
		      'difficulty': 5
		    },
		    { "q": "Which robot name was chanted during Lego Mindstorms?", 
		      'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}], 
		      'answer':'noHope.js',
		      'difficulty': 2
		    },
		    { 
		      'q': "Out of the following frontend frameworks, which framework is most rails-like?", 
		      'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}], 
		      'answer':'Ember.js',
		      'difficulty': 6
		    },
		    { 
		      'q': "Which project used a local data store?", 
		      'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}], 
		      'answer':'Twitter.js',
		      'difficulty': 1
		    }
	  	];

	  	$scope.$on('messageChange', function(event, newMsg) {
	  		$scope.message = newMsg;
	  	});



  });
