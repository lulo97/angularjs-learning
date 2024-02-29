var app = angular.module('app', []);

app.controller('control', function($scope) {
    $scope.myFunc = function(myE) {
        console.log("Event object: ", myE);
        console.log("Event type: ", myE.type);
        console.log("Target element: ", myE.target);
    }

    $scope.handlePreventDefaultClick = function(event) {
        event.preventDefault();
        console.log("Link clicked, but default action prevented.");
    };

    $scope.clickDiv1 = function(event) {
        alert("Div1")
        event.stopPropagation()
    }

    $scope.clickDiv2 = function() {
        alert("Div2")
    }
})