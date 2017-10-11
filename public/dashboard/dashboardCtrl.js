'use strict';

app.controller('dashboardCtrl', function($scope, $window, $uibModal, $log, $routeParams, $route, $location, dashboardSrvc, loginSrvc) {

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

  $scope.register = function (data) {
    dashboardSrvc.register(data).then(function(response){
      $route.reload();
    })
  }

  $scope.fetchGroup = function() {
    dashboardSrvc.fetchGroup(routeData).then(function(response){
      console.log('this is response', response);
      if (response.data == 'user not logged in') {
            $location.path('/');
      }
      else {
        $scope.camper = response.data;
        $scope.event_name = response.data[0].event_name;
        $scope.group= response.data[0].group_name;
        $scope.start_date = response.data[0].event_start_date;
        $scope.end_data = response.data[0].event_end_data;
      }
    })
  }

  $scope.setValue = function(data) {
    $scope.camper_id = data;
  }

  $scope.fetchGroup();

  $scope.delete = function(){
    dashboardSrvc.removeCamper($scope.camper_id).then(function(response){
      console.log('deleted');
      $scope.fetchGroup();
    })
  }

  $scope.logout = function () {
    dashboardSrvc.logout().then(function(response){
      $location.path('/');
    })
  }



  //end loginCtrl
})
