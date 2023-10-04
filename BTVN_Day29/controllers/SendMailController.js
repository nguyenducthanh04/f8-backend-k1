const nodemailer = require("nodemailer");
const moment = require("moment");
const model = require("../models/index");
module.exports = {
  sendEmail: async (req, res) => {
    res.render("mail/layout");
    // res.send("Thanh Nguyen test send mail");
  },
  handleSendMail: async (req, res) => {
    const { email, title, content } = req.body;
    const takeMail = await model.Mail;
    takeMail.create(req.body);
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
      subject: title, // Subject line
      html: content, // html body
    });
    console.log(info);
    res.redirect("/send/layout");
    // res.send("hello");
  },
  readEmail: async (req, res) => {
    const emailUser = await model.Mail;
    const emailList = await emailUser.findAll();
    // console.log(emailList);
    console.log(emailUser);
    res.render("mail/getEmail", { emailList, emailUser, moment });
  },
  contentMail: async (req, res) => {
    const emailUser = await model.Mail;
    const { id } = req.params;
    const emailContent = await emailUser.findOne({
      where: {
        id: id,
      },
    });
    const { email, title, content } = emailContent;
    res.render("mail/content", { email, title, content });
  },
};
