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
      // authorize: true
    })
    .when('/dashboard/:event/:group', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardCtrl'
      // authorize: true
    })
    .when('/dashboard/:event', {
      templateUrl: 'dashboard/dashboard.html',
      controller: 'dashboardCtrl'
      // authorize: true
    })
    .when('/form/:camper', {
      templateUrl: 'form/form.html',
      controller: 'formCtrl'
      // authorize: true
    })
    .when('/onSiteForm/:camper', {
      templateUrl: 'on_site_form/onSiteForm.html',
      controller: 'onSiteFormCtrl'
      // authorize: true
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
}]);

// app.run(["$rootScope", "$location", function($rootScope, $location) {
//         $rootScope.$on("$routeChangeStart", function(evt, to, from) {
//             // requires authorization?
//             if (to.authorize === true)
//             {
//                 to.resolve = to.resolve || {};
//                 if (!to.resolve.authorizationResolver)
//                 {
//                     // inject resolver
//                     to.resolve.authorizationResolver = ["authService", function(authService) {
//                         return authService.authorize();
//                     }];
//                 }
//             }
//         });
//
//         $rootScope.$on("$routeChangeError", function(evt, to, from, error) {
//             if (error instanceof AuthorizationError)
//             {
//                 // redirect to login with original path we'll be returning back to
//                 $location
//                     .path("/")
//                     .search("returnTo", to.originalPath);
//             }
//         });
//     }]);
