'use strict';

app.controller('dashboardCtrl', function($scope, $routeParams, $route, $location, dashboardSrvc, loginSrvc) {

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }

  $scope.campers = function() {
    $scope.camper = loginSrvc.getCampers();
  }

  $scope.campers();

  $scope.fetchCampers = function(id) {
    dashboardSrvc.fetchCampers(id).then(function(response){
        $location.path("/form/" + id);
    })
  }

  // $scope.fetchGroup = function(params) {
  //   var param1 = $routeParams.param1;
  // var param2 = $routeParams.param2;
  //   dashboardSrvc.fetchGroup(data).then(function(response){
  //       $scope.camper = response.data;
  //   })
  // }
  //
  // $scope.fetchGroup();




  //end loginCtrl
})
