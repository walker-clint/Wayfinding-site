'use strict';

var app = angular.module('angular-site', [
	'ui.router'
]);




app.controller("appController", ['$scope', function ($scope) {
    $scope.activateTab = function (tab) {
        $scope.active = {}; //reset
        $scope.active[tab] = true;
    }
}]);