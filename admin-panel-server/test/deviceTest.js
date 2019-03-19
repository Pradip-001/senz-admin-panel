process.env.NODE_ENV = "test";

var expect = require("chai").expect;
var mongoose = require("mongoose");
var Device = require("../models/device");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");

const info = {
  devicename: "tempdevice",
  userid: "5c836e3c3dba670760ea7f6e",
  projectid: "5c83cec0d87eaa0a5440d8a9"
};

chai.use(chaiHttp);

describe("Device tests", async () => {
  before(function(done) {
    const dburi = require("../config/keys").MONGOURI;
    mongoose
      .connect(dburi, { useNewUrlParser: true })
      .then(() => console.log("MongoDB successfully connected"))
      .catch(err => console.log(err));
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error"));
    db.once("open", function() {
      done();
    });
  });

  after(async () => {
    await Device.deleteOne({
      devicename: info.devicename
    }).exec(function(err) {
      if (err) {
        console.log(err);
      }
      process.exit(0);
    });
  });

  it("Create device test", done => {
    chai
      .request(server)
      .post("/api/devices/createdevice")
      .send(info)
      .end((err, data) => {
        if (data) {
          expect(data.body).to.be.an("object");
          expect(data.body).to.have.property("_id");
          expect(data.body).to.have.property("devicename");
          expect(data.body).to.have.property("user");
          expect(data.body).to.have.property("project");
          expect(data.body).to.have.property("date");
          done();
        }
      });
  });

  it("Get Devices test", done => {
    chai
      .request(server)
      .post("/api/devices/getdevices")
      .send({
        userid: info.userid,
        projectid: info.projectid
      })
      .end((err, data) => {
        if (data.body) {
          expect(data.body).to.be.an("array");
          expect(data.body).to.not.have.property("deevicenotfound");
          done();
        }
      });
  });
});
