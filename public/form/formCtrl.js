'use strict';

app.controller('formCtrl', function($scope, $routeParams, $route, $location, formSrvc, dashboardSrvc) {


  $scope.camperId = $routeParams.camper;

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }

  $scope.updateCamper = function(data) {
    data.status = "Pending"
    console.log('this is udpate camper data', data);
    var params1 = data.zk_event_id;
    var params2 = data.zk_group_id;
   formSrvc.updateCamper(data)
     .then(function(data) {
       console.log('this is data', data);
       $scope.updated = "true";
     })
 };

 $scope.submitCamper = function(data) {
       console.log('this is submitted camper data', data);
   var params1 = data.zk_event_id;
   var params2 = data.zk_group_id;
   console.log('this is submit Camperdata', data);
  formSrvc.submitCamper(data)
    .then(function(data) {
      if (data.zk_camper_id !== "") {
        $scope.saved = "true";
      }
      else {
        console.log('this is data', data);
           $location.path("/dashboard/" + params1 + "/" + params2);
      }

    })
};



  $scope.getCamperInfo = function() {
    formSrvc.getCamperInfo($scope.camperId).then(function(response) {
      console.log('this is response data, ', response);
      $scope.camperData = response[0];
      console.log('this is camperData', $scope.camperData);
    })
  }

  $scope.getCamperInfo();

  $scope.cancel = function(data) {
    if (data.zk_camper_id !== "") {
      $scope.cancel = "true";
    }
    else {
      var params1 = data.zk_event_id;
      var params2 = data.zk_group_id;
        $location.path("/dashboard/" + params1 + "/" + params2);
    }

  }

  $scope.logout = function () {
    dashboardSrvc.logout().then(function(response){
      $location.path('/');
    })
  }





  //end loginCtrl
})
