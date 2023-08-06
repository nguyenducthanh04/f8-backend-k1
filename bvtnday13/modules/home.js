const Base = require("../core/base");
class Home extends Base {
  index = (req, res) => {
    const name = "Thanh Nguyen";
    const desc = "Hello World";
    const address = ["123", "Hưng Yên", "VietNam"];
    const contact = {
      office: "123",
      phone: "0585762666",
      email: "dducthanh04@gmail.com",
    };
    const profiles = [
      `<a href="https://www.facebook.com/profile.php?id=100029011241481&mibextid=LQQJ4d">Facebook</a>`,
      `<a href="https://www.instagram.com/thanhd04/">Instagram</a>`,
      `<a href="https://www.youtube.com/watch?v=30KI5SuECuc">Youtube</a>`,
    ];
    this.render(req, res, "home", {
      name,
      desc,
      address,
      contact,
      profiles,
    });
  };
}
module.exports = new Home();
