var app = angular.module('app', ['ngRoute','angularJSTypedEffect']);

app.config(function ($routeProvider) {
    $routeProvider.when('/projects', {
        controller: 'ProjectsController',
        templateUrl: 'partials/projects.html'
    }).when('/resume', {
        templateUrl: 'partials/resume.html'
    }).otherwise({
        controller: 'HomeController',
        templateUrl: 'partials/home.html'
    });
});

/* CONTROLLERS */
app.controller('HomeController',['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.x = function() {
        document.getElementById('pnum-form').style.display = "block"
        document.getElementById('json-content').style.display = "none"
    };
}]);

app.controller('ProjectsController',['$scope', '$rootScope', function($scope, $rootScope) {
    //Implement this...
}]);

/* DIRECTIVES */
app.directive('jsonkDirective', function() {
    return {
        template: "COMING SOON...!"
   };
});


