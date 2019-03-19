process.env.NODE_ENV = "test";

var expect = require("chai").expect;
var mongoose = require("mongoose");
var User = require("../models/user");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");

const info = {
  name: "test",
  email: "test@email.com",
  password: "password",
  password2: "password"
};

chai.use(chaiHttp);

describe("Authentication tests", async () => {
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
    await User.deleteOne({
      email: info.email
    }).exec(function(err) {
      if (err) {
        console.log(err);
      }
      process.exit(0);
    });
  });

  it("Register test", done => {
    chai
      .request(server)
      .post("/api/users/register")
      .send(info)
      .end((err, data) => {
        if (data.body) {
          expect(data.body).to.be.an("object");
          expect(data.body).to.not.have.property(
            "email",
            "Email already exists"
          );
          expect(data.body).to.not.have.property("name", "Name is required");
          expect(data.body).to.not.have.property("email", "Email is required");
          expect(data.body).to.not.have.property("email", "Invalid email");
          expect(data.body).to.not.have.property(
            "password2",
            "Passwords must match"
          );
          expect(data.body).to.not.have.property(
            "password",
            "Password is required"
          );
          expect(data.body).to.not.have.property(
            "password",
            "Password must be at least 6 characters"
          );
          expect(data.body).to.not.have.property(
            "password2",
            "Confirm password is required"
          );

          done();
        }
      });
  });

  it("Login test", done => {
    chai
      .request(server)
      .post("/api/users/login")
      .send({
        email: info.email,
        password: info.password
      })
      .end((err, data) => {
        if (data.body) {
          expect(data.body).to.be.an("object");
          expect(data.body).to.not.have.property("emailnotfound");
          expect(data.body).to.have.property("success", true);
          expect(data.body).to.have.property("token");
          done();
        }
      });
  });
});
