(function() {

    'use strict';
    var app = angular.module('EricsFantasyHockeyTeams', ["ngRoute", ]);
    
    app.config(function($routeProvider){
    	$routeProvider
    		//home
    		.when('/home', {
    			templateUrl : '/components/home.html',
    			controller: 'homeController'
    		})
    		
    		//Fantasy Leagues
    		.when('/fph', {
    			templateUrl : '/components/fph.html',
    			controller  : 'fphController'
    		})
    		.when('/dtl', {
    			templateUrl : '/components/dtl.html',
    			controller  : 'dtlController'
    		})
    		.when('/trn', {
    			templateUrl : '/components/trn.html',
    			controller  : 'trnController'
    		})
    		
    		.otherwise({ redirectTo: '/home' });
    });

}());