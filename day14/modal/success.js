const Base = require("../core/base");

class Success extends Base {
  index = (req, res, phone) => {
    const method = req.method;

    if (method === "GET") {
      this.render(req, res, "success", {
        "success.mess": `Số ${phone} của bạn đã được kích hoạt`,
      });
    }
  };
}

module.exports = new Success();
