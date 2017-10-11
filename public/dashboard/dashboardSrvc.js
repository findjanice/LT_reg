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
    console.log('this is fetchgroup data, ', data);
      var deferred = $q.defer();
      $http({
        url: '/api/fetchGroup/:event/group',
        method: 'GET',
        params: {"event" : data.event, "group": data.group},
      }).then(function(response) {
        // camperInfo = response.data;
        // console.log('this is response data SRVC', response.data)
        deferred.resolve(response)
      })
      return deferred.promise;
    }

    this.logout = function() {
        var deferred = $q.defer();
        $http({
          url: '/logout',
          method: 'GET',
        }).then(function(response) {
          deferred.resolve(response)
        })
        return deferred.promise;
      }

this.camperInfo = function() {
  console.log('this is params', params);
  return camperInfo;
}

this.register = function(data) {
  var id = data.zkp_camper_id;
  data.status = "Submitted";
  data.registration_date = Date.now();
  var deferred = $q.defer();
  $http({
    url: '/api/register/' + id,
    method: 'PUT',
    data: data
  }).then(function(response) {
    deferred.resolve(response.data)
  })
  return deferred.promise;
}

this.removeCamper = function(data) {
  var id = data.zkp_camper_id;
  var deferred = $q.defer();
  $http.delete('/api/removeCamper/ ' + id)
   .then(function(response) {
    deferred.resolve(response.data)
  })
  return deferred.promise;
}


    //end service
   })
