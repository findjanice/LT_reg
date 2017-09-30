const knex = require('knex')(require('./knexfile'));

// post Camper information to mysql WB_d_camper table

knex.on('query', function(queryData) {
  console.log(queryData);
});

module.exports = {
  updateCamper(req, res) {
    console.log('this is req in store.js', req);
    return knex('WB_d_camper')
      .where({
        zkp_camper_id: req.zkp_camper_id
      })
      .update({
        name_first: req.name_first,
        name_middle: req.name_middle,
        name_last: req.name_last,
        roommates: req.roommates,
        email: req.email,
        gender: req.gender,
        date_of_birth: req.date_of_birth,
        phone: req.phone,
        zk_event_id: req.zk_event_id,
        first_time_flag: req.first_time_flag,
        physician_name: req.physician_name,
        physician_phone: req.physician_phone,
        father_name: req.father_name,
        mother_name: req.mother_name,
        street: req.street,
        city: req.city,
        state: req.state,
        postal_code: req.postal_code,
        fathers_cell_phone: req.fathers_cell_phone,
        mothers_cell_phone: req.mothers_cell_phone,
        fathers_work_phone: req.fathers_work_phone,
        mothers_work_phone: req.mothers_work_phone,
        emergency_contact: req.emergency_contact_first_name,
        emergency_contact_last_name: req.emergency_contact_last_name,
        emergency_home_phone: req.emergency_home_phone,
        relationship_to_camper: req.relationship_to_camper
      })
      .then(function(res) {
        console.log('this is return res', res);
      })
  },
  fetchCampers(req, res) {
    console.log('this is req in store.js fetchCampers', req);
    return knex('WB_d_camper').where({
        zkp_camper_id: req.zkp_camper_id,
      })
      .select()
      .then(function(res) {
        return (res);
      })
      .catch(TypeError, function(err) {
        console.error('fail', err)
      })

  },
  fetchGroup(req, res) {
    console.log('this is req in store.js fetchCampers', req);
    return knex('WB_d_camper').where({
        zk_event_id: req.zk_event_id,
        zk_group_id: req.zk_group_id
      })
      .select()
      .then(function(res) {
        return (res);
      })
      .catch(TypeError, function(err) {
        console.error('fail', err)
      })

  },
  loginAuth(req, res) {
    console.log('autheticating user, loginAuth', req.username);
    const pwd = req.password;
    return knex('WB_d_camper')
      .where({
        group_user: req.username
      })
      .select()
      .then(function(res) {
        if (!res || !res[0]) { // not found!
          return ('fail');
        }
        var pass = res[0].group_password;
        if (pwd === pass) {
          return (res);
          //  return('success');
        } else {
          return ('fail');
        }
      })
      .catch(function(error) {
        console.error(error);
      })
  }
  // removeCamper(req, res) {
  //   return knex('WB_d_camper').where ({
  //     zkp_camper_id: req.zkp_camper_id
  //   })
  //   .del()
  //   .then(function(res){
  //     return (res);
  //   })
  //   .catch(TypeError, function(err){
  //     console.error('fail', err)
  //   })
  //
  // }
}
