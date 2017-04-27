var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/projects', {
        controller: 'ProjectsController',
        templateUrl: 'partials/projects.html'
    }).when('/fortunummer', {
        controller: 'FortunummerController',
        templateUrl: 'partials/fortunummer.html'
    }).otherwise({
        controller: 'HomeController',
        templateUrl: 'partials/home.html'
    });
});

app.directive('jsonkHelloWorld', function() {
    return {
        template: "Directive {{x}}"
    };
});

app.controller('ProjectsController', function($scope, $rootScope) {
    $scope.x = 'Hell0 Xorld!';
    $scope.y = 'Hell0 Yorld!';
});

app.controller('FortunummerController', function($scope, $rootScope) {
    $scope.x = 'bXe!';
    $scope.y = 'bYe!';
});

app.controller('HomeController', function($scope) {
    $scope.x = 'H0mex!';
    $scope.y = 'H0mey!';
});

