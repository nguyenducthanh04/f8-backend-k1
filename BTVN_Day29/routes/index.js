var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/send-mail", async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  // console.log(transporter);
  //Doc template
  const mailTemplatePath =
    path.dirname(__dirname) + "/views/mail/active_user.html";
  let mailTemplate = fs.readFileSync(mailTemplatePath).toString();
  // console.log(mailTemplate);
  const user = {
    name: "Duc Thanh F8",
    email: "dducthanh04@gmail.com",
  };
  const linkActive = "http://fullstack.edu.vn/active";
  mailTemplate = mailTemplate
    .replaceAll("{{name}}", user.name)
    .replaceAll("{{link}}", linkActive);
  const info = await transporter.sendMail({
    from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM}>`, // sender address
    to: user.email, // list of receivers
    subject: "Kích hoạt tài khoản tại F8", // Subject line
    html: mailTemplate, // html body
  });

  console.log(info);
  res.send("Test Mail");
});
module.exports = router;
//Chú ý khi gửi mail hàng loạt => Đưa vào hàng đợi Queue
