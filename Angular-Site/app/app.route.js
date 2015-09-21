'use strict';

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('!').html5Mode(true);
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
	    })
        .state('profile.summary', {
            url: 'profile/summary',
            templateUrl: "app/profile/summary/summary.html"
        })
        .state('profile.experience', {
            url: 'profile/experience',
            templateUrl: "app/profile/experience/experience.html"
        })
    ;

	$urlRouterProvider.otherwise('/home');	
});

