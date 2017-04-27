var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/projects', {
        controller: 'ProjectsController',
        templateUrl: 'partials/projects.html'
    }).when('/resume', {
        controller: 'CVController',
        templateUrl: 'partials/resume.html'
    }).when('/fortunummer', {
        controller: 'FortunummerController',
        templateUrl: 'partials/fortunummer.html'
    }).otherwise({
        controller: 'HomeController',
        templateUrl: 'partials/home.html'
    });
});

/* CONTROLLERS */
app.controller('HomeController', function($scope) {
    $scope.x = 'H0mex!';
    $scope.y = 'H0mey!';
});

app.controller('ProjectsController', function($scope, $rootScope) {
    //Implement this...
});

app.controller('CVController', function($scope, $rootScope) {
    //Implement this...
});

app.controller('FortunummerController', function($scope, $rootScope) {
    //Implement this...
});


/* DIRECTIVES */
app.directive('jsonkHelloWorld', function() {
    return {
        template: "Directive: Hello {{x}}!"
    };
});


