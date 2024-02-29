var app = angular.module('app', []);

function myGet(http, scope) {
    http({
        method: 'GET',
        url: 'http://127.0.0.1:8000/users'
    }).then(function(response) {
        // Success callback
        scope.data = response.data;
    }, function(error) {
        // Error callback
        console.error('Error occurred:', error);
    });
}

function myGetById(http, scope) {
    http({
        method: 'GET',
        url: `http://127.0.0.1:8000/users/${scope.id}`
    }).then(function(response) {
        scope.user_by_id = response.data;
    }, function(error) {
        console.error('Error occurred:', error);
    });
}

function myPost(http, user) {
    http.post('http://127.0.0.1:8000/users', user)
    .then(function(response) {
        console.log(response)
    }).catch(function(error) {
        console.error('Error occurred:', error);
    });
}

function myPut(http, id, user) {
    http.put(`http://127.0.0.1:8000/users/${id}`, user)
    .then(function(response) {
        console.log(response)
    }).catch(function(error) {
        console.error('Error occurred:', error);
    });
}

function myDelete(http, id) {
    http.delete(`http://127.0.0.1:8000/users/${id}`)
    .then(function(response) {
        console.log(response)
    }).catch(function(error) {
        console.error('Error occurred:', error);
    });
}

app.controller('control', function($scope, $http) {
    myGet($http, $scope)

    $scope.getUserById = function() {
        console.log($scope.id)
        if ($scope.id != undefined) {
            myGetById($http, $scope)
        } else {
            console.log("Null user")
        }
    }

    $scope.addUser = function() {
        if ($scope.name != undefined || $http.age != undefined) {
            myPost($http, {"name": $scope.name, "age": $scope.age})
        } else {
            console.log("Null user")
        }
    }

    $scope.updateUser = function() {
        if ($scope.id != undefined || $scope.name != undefined || $http.age != undefined) {
            myPut($http, $scope.id, {"name": $scope.name, "age": $scope.age})
        } else {
            console.log("Null user")
        }
    }

    $scope.deleteUser = function() {
        if ($scope.id != undefined) {
            myDelete($http, $scope.id)
        } else {
            console.log("Null user")
        }
    }
})