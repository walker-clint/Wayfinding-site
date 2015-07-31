app.controller('profileSideBarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.profileItems = [
        { url: '/profile/summary', title: 'Summary', navPage: 'profile.summary' },
        { url: '/profile/experience', title: 'Experience', navPage: 'profile.experience' }
    ];
    $scope.isActiveProfile = function (profileItems) {
        debugger;
        if (profileItems.url === $location.path()) {
            return true;
        }
        return false;
    };
}])