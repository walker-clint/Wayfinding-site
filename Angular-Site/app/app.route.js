'use strict';

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: "app/home/home.html"
		})
		.state('profile',{
			url: '/profile',
			templateUrl: "app/profile/profile.html"
		})
		.state('messages',{
			url: '/messages',
			templateUrl: "app/messages/messages.html"
		})
	    .state('images', {
	        url: '/images',
	        templateUrl: "app/images/images.html"
	    });
	$urlRouterProvider.otherwise('/home');	
});

