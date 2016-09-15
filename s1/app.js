(function () {
    'use-strict';

    angular.module('lunchChecker', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.resetColors = function () {
            $scope.messageColor = "#ccc";
        };

        $scope.checkIfTooMuch = function () {
            $scope.number = 0;
            if (($scope.food == undefined) || ($scope.food.length == 0)) {
                $scope.messageColor = "#ff0000";
                $scope.message = "Please enter data first!";
            } else {
                var s = $scope.food.split(',');
                s.forEach(function (el) {
                    if (el.length > 0) {
                        $scope.number++;
                    }
                });
                $scope.message = ($scope.number > 3) ? "Too much!" : "Enjoy!";
                $scope.messageColor = "#00ff00";
            }
        }
    }

})();