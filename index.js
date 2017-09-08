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

app.post('/createCamper', (req, res) => {
  console.log('req', req);
  store
    .createCamper({
      name_first: req.body.first_name,
      name_middle: req.body.middle_name,
      name_last: req.body.last_name,
      roommates: req.body.roommates,
      email: req.body.email,
      gender: req.body.gender,
      date_of_birth: req.body.date_of_birth,
      phone: req.body.phone,
      zk_event_id: req.body.zk_event_id
    })
    .then(() => res.sendStatus(200))
})

app.post('/initiateLogin', (req, res) => {
   store
   .loginAuth({
     username: req.body.username,
     password: req.body.password
   })
   .then((res, err) => {
     return res;
   })
})


app.get('/api/group/:id', (req,res) => {
  store
  .regbyId({
    zk_event_id: 190232175262205737430988705788995240460
  })
  .then((res, err) => {
    console.log('this is res', res);
    res.status(200).json(res);
  })
  .catch((error) => {
    res.status(500).json({error})
  })
})



app.listen(7555, () =>{
  console.log('Server running on http://localhost:7555');
})
