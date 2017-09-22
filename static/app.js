var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/jobs", {
        templateUrl : "jobs.html"
    })
    .when("/clients", {
        templateUrl : "clients.html"
    })
    .when("/volumes", {
        templateUrl : "volumes.html"
    });
});
