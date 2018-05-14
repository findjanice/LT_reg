'use strict';

app.controller('loginCtrl', function($scope, $routeParams, $route, $location, loginSrvc, $rootScope, dashboardSrvc) {

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }

  $scope.user = {};


  $scope.login = function(user) {
    console.log('this is response', user);
    loginSrvc.login(user).then(function(response) {
      console.log('this is response', response);
      if (response == "authentication failed") {
        $scope.error = true;
        $scope.user = {};
         $location.path("/");
      } else {
        if (response.group_name == "On Site Registration"){
             var data = {
               event: response.zk_event_id,
               group: response.zk_group_id
             };
             $scope.getAvailableCamper(data);

        }
        else if (!response.zk_group_id) {
                   $location.path("/form/" + response.zkp_camper_id);
             }
             else {
             $location.path("/dashboard/" + response.zk_event_id + "/" + response.zk_group_id);
             }
      }

    })
  }

  $scope.getAvailableCamper = function(data) {
    dashboardSrvc.fetchGroup(data).then(function(response){
         var findAvailableCamper = _.find(response.data, {status: null});
         console.log("this is find", findAvailableCamper);
         var id = findAvailableCamper.zkp_camper_id;
        $location.path("/onSiteForm/" + id);

    })
  }



  //end loginCtrl
})
