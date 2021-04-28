var express = require('express');
var projects = express.Router();

const { Project } = require('../db/db');

// Get all projects //

projects.get('/', async (req, res) => {
  await Project.find({})
  .then(data => res.send(data))
  .catch(err => console.error(err));
});

// Create Project //

projects.post('/', async (req, res, next) => {

  if(!req.isAuthenticated()){
    return res.status(403).send()
  }

  const newPost = {...req.body};

  const project = new Project(newPost)

  project.save()
  .then(() => res.status(200).send())
  .catch(err => console.error(err));
});

// Update Project //

projects.post('/:id', async (req, res, next) => {

  if(!req.isAuthenticated()){
    return res.status(403).send()
  }

  const id = req.params.id;
  const updates = {...req.body};

  Project.findByIdAndUpdate(id, updates)
  .then(() => res.status(200).send())
  .catch(err => console.error(err));

});

// Delete Project //

projects.delete('/:id', async (req, res, next) => {

  if(!req.isAuthenticated()){
    return res.status(403).send()
  }

  const id = req.params.id;

  Project.findByIdAndDelete(id)
  .then(() => res.status(204).send())
  .catch(err => console.error(err))

});

module.exports = projects