var app = angular.module('app', []);

app.controller('control', function($scope) {
    $scope.names = ["Emil", "Tobias", "Linus"];
    $scope.animals = [
        {"name": "dog", "age": 10},
        {"name": "cat", "age": 2},
        {"name": "bird", "age": 4},
    ]
    $scope.cars = {
        car01 : {brand : "Ford", model : "Mustang", color : "red"},
        car02 : {brand : "Fiat", model : "500", color : "white"},
        car03 : {brand : "Volvo", model : "XC90", color : "black"}
    };
})