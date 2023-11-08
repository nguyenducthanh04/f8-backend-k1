const jwt = require("jsonwebtoken");
class HomeController {
  async index(req, res) {
    const token = jwt.sign({ data: req.user }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRED,
    });
    res.cookie("token_user", token);
    res.redirect(`http://127.0.0.1:4000/`);
  }
}
module.exports = new HomeController();
