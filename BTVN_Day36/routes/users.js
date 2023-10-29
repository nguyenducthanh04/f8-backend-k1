var express = require("express");
var router = express.Router();
const multer = require("multer");
const UserController = require("../controllers/UserController");
const UploadfileController = require("../controllers/UploadfileController");
/* GET users listing. */
// Thiết lập nơi lưu trữ tệp tải lên
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, +Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
router.get("/", UserController.index);
router.get("/:id", UserController.view);
router.post("/", UserController.store);
router.put("/:id", UserController.updatePut);
router.patch("/:id", UserController.updatePatch);
router.delete("/:id", UserController.delete);
router.post("/uploadFile", upload.single("file"), UploadfileController.upload);
module.exports = router;
