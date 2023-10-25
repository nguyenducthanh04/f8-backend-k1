const express = require("express");
const rateLimit = require("express-rate-limit");
module.exports = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: 4,
});
