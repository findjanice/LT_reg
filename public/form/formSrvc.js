app.service('formSrvc', function($http, $q, $location){


     this.updateCamper = function(data) {
       var id = data.zkp_camper_id;
       console.log('this is camper id', id);
       var deferred = $q.defer();
       $http({
         url: '/api/updateCamper/' + id,
         method: 'PUT',
         data: data
       }).then(function(response) {
         deferred.resolve(response.data)
       })
       return deferred.promise;
     }

     this.submitCamper = function(data) {
       var id = data.zkp_camper_id;
       data.status = "Submitted";
       data.registration_date = Date.now();
       console.log('this is camper id', id);
       var deferred = $q.defer();
       $http({
         url: '/api/updateCamper/' + id,
         method: 'PUT',
         data: data
       }).then(function(response) {
         deferred.resolve(response.data)
       })
       return deferred.promise;
     }

     this.getCamperInfo = function(data) {
       var deferred = $q.defer();
       $http({
         url: '/api/fetchCampers/' + data,
         method: 'GET',
         data: data
       }).then(function(response) {
         console.log('this is service response', response);
         deferred.resolve(response.data)
       })
       return deferred.promise;

     }


   })
