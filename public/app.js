'use strict';
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'login/login.html',
      controller: 'loginCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .when('/form/:camper', {
      templateUrl: 'form/form.html',
      controller: 'formCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
