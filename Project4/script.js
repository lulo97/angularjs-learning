var myApp = angular.module('myApp', [])

myApp.run(function($rootScope) {
    $rootScope.person = 'Any person'
});

myApp.controller('StudentController', function($rootScope, $scope) {
    $scope.person = 'Hoang Le Luong'
})

myApp.controller('TeacherController', function($scope) {
    $scope.person = 'Giao vien A'
})