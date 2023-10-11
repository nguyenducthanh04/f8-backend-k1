//Xử lý đăng nhập thông qua mxh
const FacebookStrategy = require("passport-facebook");
const model = require("../models/index");
module.exports = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ["id", "displayName", "email"],
  },
  (accessToken, refreshToken, profile, cb) => {}
);
