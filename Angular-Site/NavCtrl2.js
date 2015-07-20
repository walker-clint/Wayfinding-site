/* globals angular */

(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'NavCtrl';

    // Define the controller on the module.
    // Inject the dependencies. 
    // Point to the controller definition function.
    angular.module('app').controller(controllerId, ['$scope', NavCtrl]);

    function NavCtrl($scope) {
        // Using 'Controller As' syntax, so we assign this to the vm variable (for viewmodel).
        var vm = this;

        $scope.items = [
          { path: '/home', title: 'Home' },
          { path: '/profile', title: 'Profile' },
          { path: '/messages', title: 'Messages' },
        ];
        //- See more at: http://coder1.com/articles/angularjs-managing-active-nav-elements#sthash.KF3rySKT.dpuf
        $scope.isActive = function(item) {
            if (item.path == $location.path()) {
                return true;
            }
            return false;
        };
        // Bindable properties and functions are placed on vm.
        vm.activate = activate;
        vm.title = 'NavCtrl';

        function activate() {
            if (item.path == $location.path()) {
                return true;
            }
            return false;
        }

        //#region Internal Methods        

        //#endregion
    }
})();