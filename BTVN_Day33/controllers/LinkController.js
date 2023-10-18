const model = require("../models/index");
const User = model.User;
const Link = model.link;
const shortUrl = require("node-url-shortener");

module.exports = {
  link: async (req, res) => {
    const links = await Link.findAll({
      where: {
        user_id: req.user.id,
      },
    });
    res.render("index", { links });
  },
  handleLink: async (req, res) => {
    const { urls } = req.body;
    const userId = req.user.id;
    shortUrl.short(urls, async (err, url) => {
      const shortLink = await Link.findOne({
        where: {
          url: urls,
        },
      });

      if (!shortLink) {
        const createLink = await Link.create({
          user_id: userId,
          url: urls,
          shortUrl: url,
        });
        res.redirect("/");
      } else {
        res.redirect("/");
      }
    });
  },
};
