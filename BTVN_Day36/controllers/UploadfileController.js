const model = require("../models/index");
const File = model.file;
module.exports = {
  upload: async (req, res) => {
    try {
      const user = req.user;
      const { files } = req.body;
      const linkFile = files.substring(files.lastIndexOf("\\") + 1);
      const uploadFile = await File.create({
        filename: linkFile,
        user_id: user.data.user_id,
      });

      res.json({
        status: "success",
        linkUploaded: `/upload/${uploadFile.filename}`,
      });
    } catch (error) {
      res.status(403).json({ message: "Upload không thành công!" });
    }
  },
};
