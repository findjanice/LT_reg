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
        if (!response.zk_group_id) {
                   $location.path("/dashboard/" + response.zk_event_id);
             }
             else {
             $location.path("/dashboard/" + response.zk_event_id + "/" + response.zk_group_id);
             }
      }

    })
  }

  //end loginCtrl
})
