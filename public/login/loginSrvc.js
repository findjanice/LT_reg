app.service('loginSrvc', function($http, $q, $location){

var campers;

var params = {};

this.login = function(data){
   var deferred = $q.defer();
   $http({
     url:'/login',
     method: 'POST',
     data: data
   }).then(function(response){
      campers = response.data;
      console.log('this is campers', campers);
      params.zk_event_id = campers.zk_event_id;
      params.zk_group_id = campers.zk_group_id;
     deferred.resolve(response.data)
   })
   return deferred.promise;
}

this.getCampers = function() {
    return campers;
  }


})
