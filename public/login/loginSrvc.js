app.service('loginSrvc', function($http, $q, $location){


this.userId;

this.login = function(data){
   var deferred = $q.defer();
   $http({
     url:'/initiateLogin',
     method: 'POST',
     data: data
   }).then(function(data){
     console.log(data);
    //  userId = data._id;
     deferred.resolved(data.data)
   })
   return deferred.promise;


}




})
