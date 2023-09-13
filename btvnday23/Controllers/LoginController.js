const crypto = require("crypto-js");
const Customer = require("../models/customer");
function encryptPassword(password) {
  return crypto.MD5(password).toString();
}
module.exports = {
  index: async (req, res) => {
    const { email, password } = req.session;
    const customer = await Customer;
    const customerAll = await customer.findAll();
    const emails = [];
    const passwords = [];
    customerAll.forEach((customer) => {
      const { email: emailCustomer, password: passwordCustomer } =
        customer.dataValues;
      emails.push(emailCustomer);
      passwords.push(passwordCustomer);
    });
    console.log(emails, passwords);
    if (email === "" && password === "") {
      req.flash("errorMsg", "Bạn vui lòng nhập tài khoản và mật khẩu !");
      res.render("Login/index", {
        errorMsg: req.flash("errorMsg"),
      });
    } else if (email === undefined && password === undefined) {
      req.flash("errorMsg", "Sai tài khoản và mật khẩu !");
      res.render("Login/index", {
        errorMsg: req.flash("errorMsg"),
      });
    }
    let isFound = false;
    let isPassword = false;
    for (let i = 0; i < emails.length; i++) {
      if (email === emails[i]) {
        if (encryptPassword(password) === passwords[i]) {
          isFound = true;
          res.redirect("/");
          break;
        } else {
          isPassword = true;
        }
      }
    }
    if (!isFound) {
      if (isPassword) {
        req.flash("errorMsg", "Mật khẩu bạn nhập đã sai!");
      } else {
        req.flash("errorMsg", "Tài khoản này không tồn tại!");
      }
      res.render("Login/index", { errorMsg: req.flash("errorMsg") });
    }
  },
  handleLoginController: (req, res) => {
    const { email, password } = req.body;
    req.session.email = email;
    req.session.password = password; //create a new property in session
    res.redirect("/Login");
  },
};
