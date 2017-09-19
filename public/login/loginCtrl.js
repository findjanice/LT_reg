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
            if (!response[0].zk_group_id) {
                  $location.path("/dashboard/" + response[0].zk_event_id);
            }
            else {
            
            }

      }

    })
  }

  //end loginCtrl
})
