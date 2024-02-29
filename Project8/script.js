var app = angular.module('app', []);

app.service('myService', function() {
    this.myFunction = function() {
        return "This is a function from a service"
    }
})

app.controller('control', function($scope, $timeout, $interval, myService) {

    //This code will excute after 2 second
    $timeout(function () {
        console.log("How are you today?");
    }, 2000);

    //This code will excute after 2 second, repeat
    $interval(function () {
        console.log("Hello world?");
    }, 1000);

    console.log(myService.myFunction())
})