const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const Validator = require("validator");
const isEmpty = require("is-empty");

const Project = require("../models/project");
const User = require("../models/user");
const Device = require("../models/device");

exports.createDevice = function(req, res, next) {
  Device.findOne({
    devicename: req.body.devicename,
    user: req.body.userid,
    project: req.body.projectid
  }).then(device => {
    if (device) {
      return res
        .status(400)
        .json({ device: "Device with this device name already exist" });
    }

    const newDevice = new Device({
      devicename: req.body.devicename,
      user: req.body.userid,
      project: req.body.projectid
    });
    newDevice
      .save()
      .then(device => res.json(device))
      .catch(err => console.log(err));
  });
};

exports.getDevices = function(req, res, next) {
  Device.find({ user: req.body.userid, project: req.body.projectid }).then(
    devices => {
      // Check if user exists
      if (!devices) {
        return res.status(404).json({ deevicenotfound: "Device not found" });
      } else {
        console.log(devices);
        res.json(devices);
      }
    }
  );
};
