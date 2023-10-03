const model = require("../models/index");
const User = model.User;
const md5 = require("md5");

module.exports = {
  index: async (req, res) => {
    const msg = req.flash("msg");
    res.render("auth/login", { msg });
  },

  handleLogin: async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({
      where: { email, password: md5(password) },
    });
    if (user?.status === 0) {
      req.flash("msg", "Vui lòng kích hoạt tài khoản!");
    } else if (user?.dataValues) {
      req.session.userLogin = user.dataValues;
    } else {
      req.flash("msg", "Email hoặc mật khẩu không chính xác");
    }

    res.redirect("/auth/login");
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/auth/login");
  },
};
