const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Validator = require("validator");
const isEmpty = require("is-empty");

const Project = require("../models/project");
const User = require("../models/user");

exports.createProject = function(req, res, next) {
  Project.findOne({ title: req.body.title, user: req.body.userid }).then(
    project => {
      if (project) {
        return res
          .status(400)
          .json({ project: "Project with this title already exist" });
      }

      const newProject = new Project({
        title: req.body.title,
        user: req.body.userid
      });
      newProject
        .save()
        .then(project => res.json(project))
        .catch(err => console.log(err));
    }
  );
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
