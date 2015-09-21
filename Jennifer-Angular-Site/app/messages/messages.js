app.controller("homeController", ['$scope', function($scope) {
	$scope.count=0;
	$scope.incrementCount = function(){
		$scope.count++;
	};
}]);