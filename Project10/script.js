var app = angular.module('app', []);

app.controller('control', function($scope) {
    $scope.isDisableLabel = false;
    $scope.toggleDisable = function() {
        $scope.isDisableLabel = !$scope.isDisableLabel;
    };
})