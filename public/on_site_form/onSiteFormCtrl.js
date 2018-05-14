'use strict';

app.controller('onSiteFormCtrl', function($scope, $routeParams, $route, $location, formSrvc, dashboardSrvc, onSiteFormSrvc) {


  $scope.camperId = $routeParams.camper;

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }


 $scope.submitCamper = function(data) {
   var camperParams = {
     event: data.zk_event_id,
     group: data.zk_group_id
   };
  formSrvc.submitCamper(data)
    .then(function(data) {
      if (data == "OK") {
        $scope.saved = "true";
        $scope.getAvailableCamper(camperParams);
      }
      else {
        $scope.submitError = "true";
      }

    })
};

$scope.getAvailableCamper = function(data) {
  dashboardSrvc.fetchGroup(data).then(function(response){
       var findAvailableCamper = _.find(response.data, {status: null});
       if (findAvailableCamper = undefined) {
         $scope.showError = "true";
       } else {
         var id = findAvailableCamper.zkp_camper_id;
        $location.path("/onSiteForm/" + id);
        $scope.getCamperInfo();
       }
  })
}

  $scope.getCamperInfo = function() {
    formSrvc.getCamperInfo($scope.camperId).then(function(response) {
      $scope.camperData = response[0];
      $scope.event_name = response[0].event_name;
      $scope.start_date = response[0].event_start_date;
      $scope.end_data = response[0].event_end_date;
    })
  }

  $scope.getCamperInfo();


  $scope.cancel = function(data) {
    $scope.camperData = "";
      $route.reload();
  }

  $scope.logout = function () {
    dashboardSrvc.logout().then(function(response){
      $location.path('/');
    })
  }





  //end loginCtrl
})
