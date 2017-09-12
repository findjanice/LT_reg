'use strict';

app.controller('dashboardCtrl', function($scope, $routeParams, $route, $location, dashboardSrvc) {

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }

  $scope.fetchCampers = function(data) {
   console.log('this is in controller', data);
   dashboardSrvc.fetchCampers(data)
     .then(function(data) {
       $scope.camper = data;
       console.log('this is fetchCampers data', data);
     })
  };




  //end loginCtrl
})
