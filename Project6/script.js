var app = angular.module('app', [])

app.config( function($locationProvider) {
    $locationProvider.html5Mode(true);
});

app.controller('control', function($scope, $location, $http) {
    //If no assign, it will redirect to another url
    //$location.path('/page1.html');

    //If assign, it will store relative url to path var
    var path = $location.path();

    //If url param is empty, it will set ?b=20&c=30
    $location.search('a', 10)
    $location.search({'b': 20, 'c': 30})

    //If url param is not empty, it wil return object {'b': 20, 'c': 30}
    console.log($location.search())

    // Get current full URL 
    var absUrl = $location.absUrl();

    var hash = $location.hash();
    console.log(hash)
})

/*
// Suppose the URL is: http://example.com/page#section1
var hash = $location.hash();
// hash will be 'section1'

// To set the hash fragment, simply pass the desired value as an argument
$location.hash('new_section');
// URL will become: http://example.com/page#new_section
*/