const LocalStrategy = require("passport-local").Strategy;
const model = require("../models/index");
const bcrypt = require("bcrypt");
module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function (email, password, done) {
    // console.log(email, password);
    const user = await model.User.findOne({ where: { email } });
    // console.log(password);
    if (!user) {
      done(null, false, { message: "Email không tồn tại" });
      return;
    }
    const hash = user.password;
    bcrypt.compare(password, hash, (err, result) => {
      //   console.log(result);
      if (result) {
        done(null, user);
        return;
      }
      done(null, false, {
        message: "Mật khẩu không chính xác",
      });
    });
  }
);
