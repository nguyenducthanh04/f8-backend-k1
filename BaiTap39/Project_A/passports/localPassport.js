const LocalStrategy = require("passport-local").Strategy;
const model = require("../models/index");
const bcrypt = require("bcrypt");
const User = model.User;
module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function (email, password, done) {
    // console.log(email, password);
    const user = await User.findOne({
      where: {
        email,
      },
    });
    // console.log(user);
    if (!user) {
      done(null, false, { message: "Email sai rồi nhé anh bạn!" });
      return;
    }
    const hash = user.password;
    bcrypt.compare(password, hash, (err, result) => {
      if (result) {
        done(null, user);
        return;
      }
      done(null, false, { message: "Password sai rồi nhé anh bạn!" });
    });
  }
);
