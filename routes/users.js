const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


router.post('/register', function (req, res, next) {
  let newUser = new User({
   name: req.body.name,
   email: req.body.email,
   username: req.body.username,
   password: req.body.password
  });
  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg: 'Failed to register'})
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  }); 
});

router.post('/auth', function (req, res, next) {
   res.send('this is the Auth page');
});

router.get('/profile', function (req, res, next) {
   res.send('this is the Profile page');
});

module.exports = router;