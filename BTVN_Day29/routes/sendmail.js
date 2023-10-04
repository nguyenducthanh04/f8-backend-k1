var express = require("express");
var router = express.Router();
const SendMailController = require("../controllers/SendMailController");
/* GET users listing. */
router.get("/layout", SendMailController.sendEmail);
router.post("/layout", SendMailController.handleSendMail);
router.get("/getEmail", SendMailController.readEmail);
router.get("/content", SendMailController.contentMail);
module.exports = router;
