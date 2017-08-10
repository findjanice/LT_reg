const knex = require('knex')(require('./knexfile'));

// post Camper information to mysql WB_d_camper table



module.exports = {
  createCamper (req, res)  {
    console.log('this is req in store.js', req);
    return knex('WB_d_camper').insert({
      name_first:  req.name_first,
      name_middle: req.name_middle,
      name_last: req.name_last,
      roommates: req.roommates,
      email: req.email,
      gender: req.gender,
      date_of_birth: req.date_of_birth,
      phone: req.phone,
      zk_event_id: req.zk_event_id
    })
    .returning('zkp_camper_id')
    .then(function (id){
      console.log('this is return id', id);
    })
  },
  fetchCampers (req, res) {
    return knex('WB_d_camper').where ({
      zk_event_id: req.zk_event_id
    })
    .select()
    .then(function(res){
      return (res);
    })
    .catch(TypeError, function(err){
      console.error('fail', err)
    })

  },
  loginAuth(req, res) {
      console.log('autheticating user', req);
      const pwd = req.password;
       return knex('WB_d_camper')
        .where({ group_user: req.username })
        .select('group_password')
        .then(function(res) {
           if (!res || !res[0])  {  // not found!
             return('fail');
           }
           var pass = res[0].group_password;
           if (pwd === pass) {
             return('success');
           } else {
               return('fail');
           }
         })
        .catch(function(error) {
        return (error);
        })
      }
}
