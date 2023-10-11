//Xử lý đăng nhập thông qua mxh
const FacebookStrategy = require("passport-facebook");
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;
module.exports = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    scope: ["email"],
    profileFields: ["id", "displayName", "email"],
  },
  async (accessToken, refreshToken, profile, cb) => {
    const { provider, displayName, emails } = profile;
    let providerDetail = await Provider.findOne({
      where: {
        name: provider,
      },
    });
    let providerId;
    if (!providerDetail) {
      providerDetail = await Provider.create({
        name: provider,
      });
    }
    providerId = providerDetail.id;
    let user = await User.findOne({
      where: {
        provider_id: providerId,
      },
    });
    if (!user) {
      user = await User.create({
        name: displayName,
        provider_id: providerId,
      });
    }
    return cb(null, user);
  }
);
