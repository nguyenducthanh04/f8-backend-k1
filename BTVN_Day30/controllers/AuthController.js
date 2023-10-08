const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const model = require("../models/index");
const User = model.User;
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "jsonwebtoken-secret";
const passport = require("passport");
const LocalStrategy = require("passport-local");
module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");
    const msgType = msg ? "danger" : "success";
    const success = req.flash("success");
    // console.log(msg);
    res.render("auth/login", { pageTitle: "Đăng nhập", msg, msgType, success });
  },
  handleLogin: async (req, res) => {
    res.redirect("/");
  },
  register: async (req, res) => {
    res.render("auth/register", { pageTitle: "Đăng ký" });
  },
  handleRegister: async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(name, email, password);
    const salt = 10;
    // let passwordHash;
    bcrypt.hash(password, salt, async function (err, hash) {
      // console.log(hash);
      const data = await User.create({
        name,
        email,
        password: hash,
      });
      if (data) {
        req.flash("msg", "Đăng ký tài khoản thành công!");
        res.redirect("/auth/login");
        return;
      }
      req.flash("msg", "Vui lòng kiểm tra lại thông tin");
      res.redirect("/auth/register");
      // return;
    });
    // res.send("Handle Register");
    //Xử lý lỗi
    //lỗi dùng express-validate
  },
  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
  forget: (req, res) => {
    res.render("auth/forget");
  },
  handleFoget: async (req, res) => {
    const { email } = req.body;
    const token = jwt.sign(req.body, secret, { expiresIn: "15m" });
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM}>`, // sender address
      to: email, // list of receivers
      subject: "Đặt lại mật khẩu", // Subject line
      html: `  
      <p>Quên mật khẩu thật đấy à, quên thì nhập password để lấy lại mật khẩu =))</p>
      <p>Đùa thôi, quên thì</p>
      <p>Click vào link dưới đây để đặt lại mật khẩu</p>
       <a href="http://127.0.0.1:3000/auth/reset/${token}">Ấn vào đây này</a>`, // html body
    });
    req.flash("success", "Gửi yêu cầu đặt lại mật khẩu thành công!");
    res.redirect("/auth/login");
  },
  reset: async (req, res) => {
    const { token } = req.params;
    const msg = req.flash("error");
    const value = jwt.verify(token, secret);
    if (value) {
      const user = await User.findOne({
        where: { email: value.email },
      });
      req.flash("user", user);

      res.render("auth/reset", { msg });
      return;
    }
    res.send("Link đã hết hạn !");
  },
  handleReset: async (req, res) => {
    const { token } = req.params;
    const salt = 10;
    const user = req.flash("user");
    const { password, resetpassword } = req.body;
    console.log(password);
    if (password !== resetpassword) {
      req.flash("error", "Mật khẩu không khớp");
      res.redirect(`/auth/reset/${token}`);
      return;
    }
    bcrypt.hash(password, salt, async function (err, hash) {
      const value = await User.update(
        { password: hash },
        {
          where: {
            email: user[0].email,
          },
        }
      );
      if (value) {
        req.flash("msg", "Cập nhập mật khẩu thành công!");
        res.redirect("/auth/login");
      }
    });
  },
};
