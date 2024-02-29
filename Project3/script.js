var myApp = angular.module("myApp", [])

myApp.directive('elementDirective', function() {
    return {
      restrict: 'E', // Restricting to Element name
      template: '<div>This is an element directive!</div>'
    }
})

myApp.directive('attributeDirective', function() {
    return {
      restrict: 'A', // Restricting to Element name
      template: '<div>This is an attribute directive!</div>'
    }
})

myApp.directive('classDirective', function() {
    return {
      restrict: 'C', // Restricting to Element name
      template: '<div>This is an class directive!</div>'
    }
})

myApp.directive('commentDirective', function() {
    return {
      restrict: 'M', // Restricting to Element name
      template: '<div>This is an comment directive!</div>'
    }
})