'use strict';

app.controller('formCtrl', function($scope, $routeParams, $route, $location, formSrvc) {

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }

  $scope.updateCamper = function(data) {
   console.log('this is in controller', data);
   formSrvc.updateCamper(data)
     .then(function(data) {
       console.log('this is updateCamper data', data);
     })
 };



  //end loginCtrl
})
