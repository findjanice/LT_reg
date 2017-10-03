//dependecies
const express = require ('express');
const bodyParser = require ('body-parser');
const promise = require("bluebird");

//file dependecies
const store = require('./store');


//express
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

//endpoints

app.put('/api/updateCamper/:id', (req, res, id) => {
  console.log('req updateCamper', req.body);
  store
    .updateCamper({
      name_first: req.body.name_first,
      name_middle: req.body.name_middle,
      name_last: req.body.name_last,
      roommates: req.body.roommates,
      email: req.body.email,
      gender: req.body.gender,
      date_of_birth: req.body.date_of_birth,
      phone: req.body.phone,
      zkp_camper_id: req.params.id,
      first_time_flag: req.body.first_time_flag,
      physician_name_first: req.body.physician_name_first,
      physician_name_last: req.body.physician_name_last,
      physician_phone: req.body.physician_phone,
      father_name_first: req.body.father_name_first,
      mother_name_first: req.body.mother_name_first,
      father_name_last: req.body.father_name_last,
      mother_name_last: req.body.mother_name_last,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      postal_code: req.body.postal_code,
      fathers_cell_phone: req.body.fathers_cell_phone,
      mothers_cell_phone: req.body.mothers_cell_phone,
      fathers_work_phone: req.body.fathers_work_phone,
      mothers_work_phone: req.body.mothers_work_phone,
      emergency_contact_first_name: req.body.emergency_first_name,
      emergency_contact_last_name: req.body.emergency_last_name,
      emergency_home_phone: req.body.emergency_home_phone,
      relationship_to_camper: req.body.relationship_to_camper
    })
    .then(() => res.sendStatus(200))
})

app.post('/initiateLogin', (req, res) => {
   store
   .loginAuth({
     username: req.body.username,
     password: req.body.password
   })
   .then((response, err) => {
     return res.send(response);
   })
})


app.get('/api/fetchCampers/:id', (req,res, id) => {
    console.log('req fetchCampers', req.params);
  store
  .fetchCampers({
    zkp_camper_id: req.params.id
  })
  .then((response) => {
    console.log('this is res fetchCampers', response);
    return res.send(response);
  })
  .catch((error) => {
    console.log('this is error, fetchCampers', error)
  })
})

app.get('/api/fetchGroup/:event/group', (req,res, id) => {
    console.log('req fetchGroup', req.query.event);
  store
  .fetchGroup({
    zk_event_id: req.query.event,
    zk_group_id: req.query.group
  })
  .then((response) => {
    console.log('this is res fetch', response);
    return res.send(response);
  })
  .catch((error) => {
    console.log('this is error, fetchCampers', error)
  })
})


app.delete('/api/removeCamper/:id', (req, res, id) => {
   store
   .removeCamper({
     zkp_camper_id: req.params.id
   }).then((response) => {
     return res.send(response);
   })
   .catch((error) => {
     console.log('this is error', error)
   })


})




app.listen(7555, () =>{
  console.log('Server running on http://localhost:7555');
})
