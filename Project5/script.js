var app = angular.module('myApp', [])

app.controller("Controller", function($scope) {
    $scope.name = 'Luong'
    $scope.players = [
        {name:'Jani', level:3},
        {name:'Carl', level:1},
        {name:'Margareth', level:6},
    ];
    $scope.price = 123
    $scope.names = [
        'Hoang Le Luong',
        'Hoang An Toan',
        'Le Diem Hanh'
    ]
    $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8]

    console.log(angular.isString("Hello"))
    console.log(angular.isNumber(123))
})

app.filter('myFilterFunction', function() {
    return function(element) {
        return element * element
    }
})