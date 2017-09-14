'use strict';

app.controller('formCtrl', function($scope, $routeParams, $route, $location, formSrvc, dashboardSrvc) {


  $scope.camperId = $routeParams.camper;

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }

  $scope.updateCamper = function(data) {
   formSrvc.updateCamper(data)
     .then(function(data) {
       console.log('this is updateCamper data', data);
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





  //end loginCtrl
})
