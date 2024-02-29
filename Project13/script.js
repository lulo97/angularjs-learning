var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/page1', 
            {
                templateUrl: 'page1.html',
                controller : "page1Controller"
            }
        );
        $routeProvider.when('/page2', 
            {
                templateUrl: 'page2.html',
                controller : "page2Controller"
            }
        );
        $routeProvider.otherwise({redirectTo:'/'});

        //Turn on html5 mode to get rid of "#!/" in url
        //requireBase = false to don't have to declare <base> in <head>
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }
])

app.controller('page1Controller', function($scope) {
    console.log("This is controller from page1")
})

app.controller('page2Controller', function($scope) {
    console.log("This is controller from page2")
})