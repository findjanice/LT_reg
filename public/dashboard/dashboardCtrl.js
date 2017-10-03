'use strict';

app.controller('dashboardCtrl', function($scope, $routeParams, $route, $location, dashboardSrvc, loginSrvc) {

  var routeData = $routeParams;

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

  $scope.fetchGroup = function() {
    dashboardSrvc.fetchGroup(routeData).then(function(response){
        $scope.camper = response.data;
        $scope.event_name = response.data
        console.log('this is new camper scope', $scope.camper);
    })
  }

  $scope.fetchGroup();




  //end loginCtrl
})
