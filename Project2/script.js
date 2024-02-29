//Module
var app = angular.module('myApp', [])

//Controller the module
app.controller("myController", function($scope) {
    $scope.age = 21
    $scope.name = "Luong"
    $scope.student_id = 20206154
})

//Directive name is camelCase, example thisIsAName
app.directive("myDirective", function() {
    return {
        template: "This is a new born directive"
    }
})