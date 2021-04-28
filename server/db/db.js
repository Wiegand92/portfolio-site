const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL, 
  {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false}
).catch(err => console.error(err));
mongoose.set('useCreateIndex', true);

const projectSchema = new mongoose.Schema({
  name: String,
  url: String,
  photo: Buffer,
  description: String
})

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

userSchema.plugin(passportLocalMongoose);

const Project = mongoose.model("Project", projectSchema);

const User = mongoose.model("User", userSchema);

module.exports = { Project, User };