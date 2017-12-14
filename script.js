var app = angular.module('app', ['ngRoute','angularJSTypedEffect']);

app.config(function ($routeProvider) {
    $routeProvider.when('/projects', {
        controller: 'ProjectsController',
        templateUrl: 'partials/projects.html'
    }).when('/resume_en', {
        controller: 'CVController',
        templateUrl: 'partials/resume_en.html'
    }).when('/resume_sv', {
        controller: 'CVController',
        templateUrl: 'partials/resume_sv.html'
    }).otherwise({
        controller: 'HomeController',
        templateUrl: 'partials/home.html'
    });
});

app.run(function($rootScope) {
    $rootScope.instructions = "Hello Petter!";
});

/* CONTROLLERS */
app.controller('HomeController',['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.x = function() {
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


