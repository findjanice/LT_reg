app.service('loginSrvc', function($http, $q, $location){

var campers;

this.login = function(data){
   var deferred = $q.defer();
   $http({
     url:'/initiateLogin',
     method: 'POST',
     data: data
   }).then(function(response){
      campers = response.data;
     deferred.resolve(response.data)
   })
   return deferred.promise;
}

this.getCampers = function() {
    return campers;
  }


})
