'use strict';
debugger;

var app = angular.module('angular-site', [
    'ui.router'
])
.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.items = [
        { url: '/home', title: 'Home', navPage: 'home' },
        { url: '/profile', title: 'Profile', navPage: 'profile' },
        { url: '/messages', title: 'Messages', navPage: 'messages' },
        { url: '/images', title: 'Images', navPage: 'images' },
    ];
    $scope.isActive = function(item) {
        if (item.url == $location.path()) {             
            return true;
        }
        return false;
    };      
}])
.controller('MyCtrl1', [function() {
}])
.controller('MyCtrl2', [function() {
}]);

//- See more at: http://coder1.com/articles/angularjs-managing-active-nav-elements#sthash.KF3rySKT.dpuf