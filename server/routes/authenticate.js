var express = require('express');
var authenticate = express.Router();
const passport = require('passport');

const { User } = require('../db/db');

// Passport auth setup //

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Login User //

authenticate.post('/', passport.authenticate('local'),
  function (req, res) {
    res.status(200).send()
  }
);

// Log Out User //

authenticate.get('/logout', (req, res) => {
  req.logout()
  res.status(200).send()
});

// Add User //

authenticate.post('/new-user', async (req, res) => {
  const { username, password } = req.body;

  User.register({username}, password, function(err, user){
    if(err) {
      console.error(err);
      res.status(400).send()
    } else {
      passport.authenticate("local", {
        failureFlash: true
      });
      res.status(200).send();
    }
  })

});

module.exports = authenticate; 