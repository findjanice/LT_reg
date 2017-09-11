app.service('formSrvc', function($http, $q, $location){


     this.updateCamper = function(data) {
       var deferred = $q.defer();
       $http({
         url: '/api/updateCamper/',
         method: 'PUT',
         data: data
       }).then(function(response) {
         deferred.resolve(response.data)
       })
       return deferred.promise;
     }



   })
