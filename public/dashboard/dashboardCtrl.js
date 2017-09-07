'use strict';

app.controller('dashboardCtrl', function($scope, $routeParams, $route, $location) {

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }



  //end loginCtrl
})
