const GitHubStrategy = require("passport-github").Strategy;
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;
module.exports = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL,
    scope: ["username", "email"],
  },
  async (accessToken, refreshToken, profile, cb) => {
    const { provider, displayName, emails } = profile;
    // const [{ value: email }] = emails;
    ///Em không lấy được email ra
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
        // email,
        provider_id: providerId,
      },
    });
    if (!user) {
      user = await User.create({
        name: displayName,
        // email,
        provider_id: providerId,
      });
    }
    return cb(null, user);
  }
);
