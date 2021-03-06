const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");

const router = require("./routes/index");

const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Passport middleware
app.use(passport.initialize());

// Passport config
// require('./config/passport')(passport)

// DB Config
const db = require("./config/keys").MONGOURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Router
app.use("/", router);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404))
// })

app.get("/", function(req, res) {
  console.log("welcome to senz");
  res.send("welcome to SenZ");
});

// error handler
// app.use(function (err, req, res) {
//     // set locals, only providing error in development
//     res.locals.message = err.message
//     res.locals.error = req.app.get('env') === 'development' ? err : {}

//     // render the error page
//     res.status(err.status || 500)
//     res.render('error')
// })

module.exports = app;
