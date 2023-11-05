const express = require("express");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const uuid = require("uuid");
const model = require("../models/index");
const User = model.User;
class UserMiddleware {
  async cacheMiddleware(req, res, next) {
    const userId = req.cookies.user_id || uuid.v4();
    const cacheKey = userId + req.originalUrl;
    const cacheFilePath = `cache/${cacheKey}.json`;

    if (fs.existsSync(cacheFilePath)) {
      const cachedData = fs.readFileSync(cacheFilePath, "utf-8");
      res.json(JSON.parse(cachedData));
    } else {
      const result = performDatabaseQuery();

      fs.writeFileSync(cacheFilePath, JSON.stringify(result));

      res.json(result);

      res.cookie("user_id", userId);
    }
  }
  async performDatabaseQuery(req, res) {
    return await User.findAll();
  }
}
module.exports = new UserMiddleware();
