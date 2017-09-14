app.service('dashboardSrvc', function($http, $q) {


var camperInfo;


this.fetchCampers = function(id) {
  console.log('this is fetchCampers data', id);
    var deferred = $q.defer();
    $http({
      url: '/api/fetchCampers/:id',
      method: 'GET',
      data: id
    }).then(function(response) {
      camperInfo = response.data;
      console.log('this is response data SRVC', response.data)
      deferred.resolve(response.data)
    })
    return deferred.promise;
  }


  this.fetchGroup = function(data) {
      var deferred = $q.defer();
      $http({
        url: '/api/fetchCampers/:event/:group',
        method: 'GET',
        params: {zk_event_id: data.zk_event_id, zk_group_id: data.zk_group_id },
      }).then(function(response) {
        camperInfo = response.data;
        console.log('this is response data SRVC', response.data)
        deferred.resolve(response.data)
      })
      return deferred.promise;
    }

this.camperInfo = function() {

  console.log('this is params', params);
  return camperInfo;
}
    //end service
   })
