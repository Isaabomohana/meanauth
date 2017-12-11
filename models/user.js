const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callBack) {
  User.findById(id, callBack);
}

module.exports.getUserByUsername = function (username, callBack) {
  const query = {username: username}
  User.findOne(query, callBack);
}

module.exports.addUser = function (newUser, callBack) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      if (err) throw err;
      
      newUser.password = hash;
      newUser.save(callBack); 
    });
  });  
}
