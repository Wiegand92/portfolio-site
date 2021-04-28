const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const serverless = require('serverless-http');
require('dotenv').config();

// Route imports //

const projects = require('./routes/projects');
const authenticate = require('./routes/authenticate')

// If we deploy, will set the port to whatever server, else 4200 //

const PORT = process.env.PORT || 4200;

//Middleware//

app.use(cors());
app.use(express.json());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// Projects Routes //
app.use('/.netlify/functions/projects', projects);

// User Routes //
app.use('/.netlify/functions/authenticate', authenticate);

// Start Server //
app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`)
});

module.exports.handler = serverless(app)