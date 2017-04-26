var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/first', {
        controller: 'HelloController',
        templateUrl: 'partials/hello.html'
    }).when('/first', {
        controller: 'ByeController',
        templateUrl: 'partials/bye.html'
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

app.controller('HelloController', function($scope, $rootScope) {
    $scope.x = 'Hell0 Xorld!';
    $scope.y = 'Hell0 Yorld!';
});

app.controller('ByeController', function($scope, $rootScope) {
    $scope.x = 'bXe!';
    $scope.y = 'bYe!';
});

app.controller('HomeController', function($scope) {
    $scope.x = 'H0mex!';
    $scope.y = 'H0mey!';
});

