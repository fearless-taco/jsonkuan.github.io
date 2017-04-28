var app = angular.module('app', ['ngRoute','angularJSTypedEffect']);

app.config(function ($routeProvider) {
    $routeProvider.when('/projects', {
        controller: 'ProjectsController',
        templateUrl: 'partials/projects.html'
    }).when('/resume', {
        controller: 'CVController',
        templateUrl: 'partials/resume.html'
    }).otherwise({
        controller: 'HomeController',
        templateUrl: 'partials/home.html'
    });
});

app.run(function($rootScope) {
    $rootScope.instructions = "Hello Jon!";
});

/* CONTROLLERS */
app.controller('HomeController',['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.instructions = "Try clicking json values!";
    $scope.x = function() {
        document.getElementById('pnum-form').style.display = "block"
        document.getElementById('json-content').style.display = "none"
    };
}]);

app.controller('ProjectsController',['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.instructions = "Click the house to return!";
}]);

app.controller('CVController',['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.instructions = "";
}]);


/* DIRECTIVES */
app.directive('jsonkDirective', function() {
    return {
        template: "COMING SOON...!"
   };
});


