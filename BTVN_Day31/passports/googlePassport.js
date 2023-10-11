//Xử lý đăng nhập thông qua mxh
const GoogleStrategy = require("passport-google-oidc");
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;
module.exports = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ["profile", "email"],
  },
  async (issuer, profile, done) => {
    // console.log(issuer);
    console.log(profile);
    const { displayName, emails } = profile;
    const [{ value: email }] = emails;
    console.log(displayName, email);
    //Xử lý tương tác với database
    //1. Kiểm tra trong bảng providers có Provider hay chưa
    const provider = "google";
    let providerDetail = await Provider.findOne({
      where: {
        name: provider,
      },
    });
    //2. Insert nếu không có hoặc lấy id nếu đã có
    let providerId;
    if (!providerDetail) {
      providerDetail = await Provider.create({
        name: provider,
      });
    }
    providerId = providerDetail.id;
    //3. Kiểm tra bảng users xem đã có users với provider_id hay chưa?
    let user = await User.findOne({
      where: {
        email,
        provider_id: providerId,
      },
    });
    //4. Insert vào bảng users nếu chưa có hoặc lấy ra user nếu đã có
    if (!user) {
      user = await User.create({
        name: displayName,
        email,
        provider_id: providerId,
      });
    }
    console.log(user);
    //5. Return về hàm done với thông tin user lấy được để passport tự động xử lý đăng nhập
    return done(null, user);
  }
);
