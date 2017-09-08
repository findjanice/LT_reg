app.service('dashboardSrvc', function($http, $q) {


this.getRegbyId = function(data) {
    var deferred = $q.defer();
    $http({
      url: '/api/registration/' + data,
      method: 'GET',
      data: data
    }).then(function(response) {
      deferred.resolve(response.data)
    })
    return deferred.promise;
  }

  this.updateUser = function(data) {
    var deferred = $q.defer();
    $http({
      url: '/api/registration/' + data._id,
      method: 'PUT',
      data: data
    }).then(function(response) {
      deferred.resolve(response.data)
    })
    return deferred.promise;
  }
  app.service('adminService', function($http, $q) {


    //end service
   })
