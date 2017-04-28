var app = angular.module('app', ['ngRoute']);

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

/* CONTROLLERS */
app.controller('HomeController',['$scope',  function($scope) {
    $scope.x = function() {
        document.getElementById('pnum-form').style.display = "block"
        document.getElementById('json-content').style.display = "none"

    }
    $scope.y = function() {
       $rootScope.seeFortune = false;
       alert("false");
    }
}]);

app.controller('ProjectsController', ['$scope', '$rootscope', function($scope, $rootScope) {
    //Implement this...
}]);

app.controller('CVController', ['$scope', '$rootscope', function($scope, $rootScope) {
    //Implement this...
}]);


/* DIRECTIVES */
app.directive('jsonkHelloWorld', function() {
    return {
        template: "Directive: Hello {{x}}!"
    };
});


