//dependecies
const express = require ('express');
const bodyParser = require ('body-parser');
const promise = require('bluebird');
const _ = require('lodash');

const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser')

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


//file dependecies
const store = require('./store');

var User = require('./model');

//get instance of router
const router = express.Router();

//express middleware
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'our secret string'}));

app.use(passport.initialize());
app.use(passport.session());



app.use((req, res, done) => {
  console.log('this is req.sessions', req.session);
  if (req.session && req.session.passport) {
    console.log('user is logged in: ', req.session.passport);
  }
  else {
    console.log('user not logged in');
  }
  done();
});


const isAuthenticated = (req, res, done) => {
  console.log('this is authenticated req', req);
  if (req.isAuthenticated()) {
    return done();
  }
  res.send('user not logged in');
};

//password salt

const salt = bcrypt.genSaltSync(10);

//Salt and has password
// const passwordToSave = bcrypt.hashSync(passwordFromUser, salt);

//web token authetication
// var jwtOptions = {};
// jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
// jwtOptions.secretOrKey = 'alh3myG';
//
// var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next){
//   console.log('payload received', jwt_payload);
//
// })

//endpoints

passport.use(new LocalStrategy(function(username, password, done) {
  console.log('password username', username, password);
   new User({group_user: username, group_password: password})
   .fetch().
   then(function(data) {
      var user = data;
      console.log('this is data', data);
      if(user === null) {
         return done(null, false, {message: 'Invalid username or password'});
      } else {
         user = data.toJSON();
         console.log('this is password', user.group_password);
         if(bcrypt.compareSync(password, user.group_password)) {
            return done(null, false, {message: 'Invalid username or password'});
         } else {
            return done(null, user);
         }
      }
   });
}));

passport.serializeUser(function(user, done) {
  done(null, user.zk_event_id);
});

passport.deserializeUser(function(user, done) {
     new User({zk_event_id: user}).fetch().then(function(usr) {
      done(null, usr);
   });
});



app.post('/login',  function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log('user not found');
      return res.send('authentication failed');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      console.log(req.session);
      return res.status(200).json(user);
    });
  })(req, res, next);
});

app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


// +++Original Login No Authentication+++

// app.post('/initiateLogin', (req, res) => {
//    store
//    .loginAuth({
//      username: req.body.username,
//      password: req.body.password
//    })
//    .then((response, err) => {
//      return res.send(response);
//    })
// })
app.post('/api/newCamper', isAuthenticated, (req, res, id) => {
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
      physician_name: req.body.physician_name,
      physician_phone: req.body.physician_phone,
      father_name_first: req.body.father_name_first,
      mother_name_first: req.body.mother_name_first,
      father_name_last: req.body.father_name_last,
      mother_name_last: req.body.mother_name_last,
      street: req.body.street,
      street: req.body.street_two,
      city: req.body.city,
      state: req.body.state,
      postal_code: req.body.postal_code,
      fathers_cell_phone: req.body.fathers_cell_phone,
      mothers_cell_phone: req.body.mothers_cell_phone,
      fathers_work_phone: req.body.fathers_work_phone,
      mothers_work_phone: req.body.mothers_work_phone,
      emergency_contact_first_name: req.body.emergency_contact_first_name,
      emergency_contact_last_name: req.body.emergency_contact_last_name,
      emergency_home_phone: req.body.emergency_home_phone,
      emergency_cell_phone: req.body.emergency_cell_phone,
      relationship_to_camper: req.body.relationship_to_camper,
      registration_date: req.body.registration_date,
      status: req.body.status,
      guardian_flag: req.body.guardian_flag
    })
    .then(() => res.sendStatus(200))
})

app.put('/api/updateCamper/:id', isAuthenticated, (req, res, id) => {
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
      physician_name: req.body.physician_name,
      physician_phone: req.body.physician_phone,
      father_name_first: req.body.father_name_first,
      mother_name_first: req.body.mother_name_first,
      father_name_last: req.body.father_name_last,
      mother_name_last: req.body.mother_name_last,
      street: req.body.street,
      street: req.body.street_two,
      city: req.body.city,
      state: req.body.state,
      postal_code: req.body.postal_code,
      fathers_cell_phone: req.body.fathers_cell_phone,
      mothers_cell_phone: req.body.mothers_cell_phone,
      fathers_work_phone: req.body.fathers_work_phone,
      mothers_work_phone: req.body.mothers_work_phone,
      emergency_contact_first_name: req.body.emergency_contact_first_name,
      emergency_contact_last_name: req.body.emergency_contact_last_name,
      emergency_home_phone: req.body.emergency_home_phone,
      emergency_cell_phone: req.body.emergency_cell_phone,
      relationship_to_camper: req.body.relationship_to_camper,
      registration_date: req.body.registration_date,
      status: req.body.status,
      guardian_flag: req.body.guardian_flag
    })
    .then(() => res.sendStatus(200))
})

app.put('/api/register/:id', isAuthenticated, (req, res, id) => {
  store
    .registerCamper({
      status: req.body.status,
      registration_date: req.body.registration_date,
      zkp_camper_id: req.params.id,
    })
    .then(() => res.sendStatus(200))
})




app.get('/api/fetchCampers/:id', isAuthenticated, (req,res, id) => {
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

app.get('/api/fetchGroup/:event/group', isAuthenticated, (req,res, id) => {

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
    res.sendStatus(500);
  })
})




app.delete('/api/removeCamper/:id', (req, res, id) => {
   store
   .removeCamper({
     zkp_camper_id: req.params.id
   }).then((response) => {
     return res.sendStatus(status);
   })
   .catch((error) => {
     console.log('this is error', error)
   })


})




// app.listen(7555, () =>{
//   console.log('Server running on http://localhost:7555');
// })

app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});
