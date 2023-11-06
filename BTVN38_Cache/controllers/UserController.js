const model = require("../models/index");
const User = model.User;
const Cache = require("file-system-cache").default;
const cache = Cache({
  basePath: "./.cache", // (optional) Path where cache files are stored (default).
  ns: "f8", // (optional) A grouping namespace for items.
  hash: "sha1", // (optional) A hashing algorithm used within the cache key.
  ttl: 86400, // (optional) A time-to-live (in secs) on how long an item remains cached.
});
const cacheStore = async (key, value, ttl) => {
  let data = await cache.get(key);
  if (!data) {
    cache.setSync(key, value, ttl);
    data = value;
    console.log("Database");
  } else {
    console.log("Cache");
  }
  return data;
};

module.exports = {
  index: async (req, res) => {
    let users = await User.findAll();
    const dataUser = await cacheStore("users", users, 3600);
    console.log(dataUser);
    res.render("users/index", { users });
  },
};
