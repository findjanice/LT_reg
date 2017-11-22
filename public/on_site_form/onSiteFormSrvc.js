app.service('onSiteFormSrvc', function($http, $q, $location){



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

     this.getAvailableCamper = function(params1, params2) {
       console.log('this is fetchgroup data, ', data);
         var deferred = $q.defer();
         $http({
           url: '/api/fetchGroup/:event/group',
           method: 'GET',
           params: {"event" : params1, "group": params2},
         }).then(function(response) {
           response = _.find(response.data, {status: NULL})

           // camperInfo = response.data;
           // console.log('this is response data SRVC', response.data)
           deferred.resolve(response)
         })
         return deferred.promise;
       }

   })
