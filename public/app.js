'use strict';
var app = angular.module('app', ['ngRoute', 'bootstrap.angular.validation', 'ui.bootstrap']);

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
    .when('/dashboard/:event/:group', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardCtrl'
    })
    .when('/dashboard/:event', {
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

app.config(['bsValidationConfigProvider', function(bsValidationConfigProvider) {
  bsValidationConfigProvider.global.setValidateFieldsOn('submit');
  bsValidationConfigProvider.global.errorMessagePrefix = '<span class="glyphicon glyphicon-warning-sign"></span> &nbsp;';
}])
