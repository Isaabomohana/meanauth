const express = require('express');
const router = express.Router();

router.get('/register', function (req, res, next) {
   res.send('this is the register page');
});

router.post('/auth', function (req, res, next) {
   res.send('this is the Auth page');
});

router.get('/profile', function (req, res, next) {
   res.send('this is the Profile page');
});

router.get('/validate', function (req, res, next) {
   res.send('this is the validation page');
});

module.exports = router;