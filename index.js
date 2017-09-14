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

app.put('/api/updateCamper/', (req, res) => {
  console.log('req updateCamper', req.body);
  store
    .updateCamper({
      name_first: req.body.first_name,
      name_middle: req.body.middle_name,
      name_last: req.body.last_name,
      roommates: req.body.roommates,
      email: req.body.email,
      gender: req.body.gender,
      date_of_birth: req.body.date_of_birth,
      phone: req.body.phone
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



app.listen(7555, () =>{
  console.log('Server running on http://localhost:7555');
})
