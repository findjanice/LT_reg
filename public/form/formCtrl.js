'use strict';

app.controller('formCtrl', function($scope, $routeParams, $route, $location) {

  this.state = $location.path();

  this.go = function(path) {
    $location.path(path);
  }



  //end loginCtrl
})
