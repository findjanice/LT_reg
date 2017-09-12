app.service('dashboardSrvc', function($http, $q) {


this.fetchCampers = function(data) {
    var deferred = $q.defer();
    $http({
      url: '/api/fetchCampers/' + '129307779235000408982809664554043678512',
      method: 'GET',
      data: data
    }).then(function(response) {
      console.log('this is response data SRVC', response.data)
      deferred.resolve(response.data)
    })
    return deferred.promise;
  }



    //end service
   })
