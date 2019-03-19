process.env.NODE_ENV = "test";

var expect = require("chai").expect;
var mongoose = require("mongoose");
var Project = require("../models/project");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");

const info = {
  title: "testtitle",
  userid: "5c836e3c3dba670760ea7f6e"
};

chai.use(chaiHttp);

describe("Project tests", async () => {
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
    await Project.deleteOne({
      title: info.title
    }).exec(function(err) {
      if (err) {
        console.log(err);
      }
      process.exit(0);
    });
  });

  it("Create project test", done => {
    chai
      .request(server)
      .post("/api/projects/createproject")
      .send(info)
      .end((err, data) => {
        //console.log(data.body);
        if (data) {
          expect(data.body).to.be.an("object");
          expect(data.body).to.have.property("_id");
          expect(data.body).to.have.property("title");
          expect(data.body).to.have.property("user");
          expect(data.body).to.have.property("date");
          done();
        }
      });
  });

  it("Get projects test", done => {
    chai
      .request(server)
      .post("/api/projects/getprojects")
      .send({
        userid: info.userid
      })
      .end((err, data) => {
        if (data.body) {
          expect(data.body).to.be.an("array");
          expect(data.body).to.not.have.property("projectnotfound");
          done();
        }
      });
  });
});
