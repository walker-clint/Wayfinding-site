'use strict';
debugger;

var app = angular.module('angular-site', [ 'ui.router' ]);

app.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.items = [
        { url: '/home', title: 'Home', navPage: 'home' },
        { url: '/profile', title: 'Profile', navPage: 'profile' },
        { url: '/messages', title: 'Messages', navPage: 'messages' },
        { url: '/images', title: 'Images', navPage: 'images' },
    ];
    $scope.isActive = function(item) {
        if (item.url === $location.path()) {             
            return true;
        }
        return false;
    };      
}])

app.controller('MyCtrl2', [function() {
}]);

//- See more at: http://coder1.com/articles/angularjs-managing-active-nav-elements#sthash.KF3rySKT.dpuf