const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Validator = require("validator");
const isEmpty = require("is-empty");

const Project = require("../models/project");
const User = require("../models/user");
exports.createProject = function(req, res, next) {
  const newProject = new Project({
    title: req.body.title,
    user: req.body.userid
  });

  // User.update(
  //     { _id: req.body.userid },
  //     { $push: { projects: newProject } }
  // ).then(project => res.json(project)).catch(err => console.log(err))
  newProject
    .save()
    .then(project => res.json(project))
    .catch(err => console.log(err));
};

exports.getProjects = function(req, res, next) {
  Project.find({ user: req.body.userid }).then(projects => {
    // Check if user exists
    if (!projects) {
      return res.status(404).json({ projectnotfound: "Project not found" });
    } else {
      console.log(projects);
      res.json(projects);
    }
  });
};
