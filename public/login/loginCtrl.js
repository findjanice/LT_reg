'use strict';

app.controller('loginCtrl', function($scope, $routeParams, $route, $location, loginSrvc) {

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }

  $scope.login = function(data) {
    console.log(data);
    loginSrvc.login(data).then(function(response) {
      console.log('this is login response', response);
      userId = response._id;
      console.log('this is userId', userId);
      if (response === "incorrect login") {
        $scope.error = ""

      } else {
        $location.path("/register");
      }

    })
  }

  //end loginCtrl
})
