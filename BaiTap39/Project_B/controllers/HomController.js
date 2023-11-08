const jwt = require("jsonwebtoken");
class HomeController {
  async index(req, res) {
    const token = req.cookies.token_user;
    console.log(`Token: ${token}`);
    let user_Id = null;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        // console.log(token);
        // console.log(decoded);
        console.log(err);
        if (err) {
          console.log(`Lỗi`);
        } else {
          user_Id = decoded.data;
          console.log(`userId: ${userId}`);
        }
      });
    }
    res.render("index", { user_Id });
  }
}
module.exports = new HomeController();
