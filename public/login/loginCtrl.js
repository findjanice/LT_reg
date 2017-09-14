'use strict';

app.controller('loginCtrl', function($scope, $routeParams, $route, $location, loginSrvc) {

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }

  $scope.login = function(data) {
    loginSrvc.login(data).then(function(response) {
      if (response === "fail") {
        $scope.error = true;
        $scope.user = {};
      } else {

        $location.path("/dashboard");
      }

    })
  }

  //end loginCtrl
})
