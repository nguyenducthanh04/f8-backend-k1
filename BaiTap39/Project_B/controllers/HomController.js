const jwt = require("jsonwebtoken");
class HomeController {
  async index(req, res) {
    const token = req.cookies.token;
    console.log(`Token: ${token}`);
    let userId = null;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        // console.log(token);
        // console.log(decoded);
        console.log(err);
        if (err) {
          console.log(`Lỗi`);
        } else {
          userId = decoded.data;
          console.log(`userId: ${userId}`);
        }
      });
    }
    res.render("index", { userId });
  }
}
module.exports = new HomeController();
