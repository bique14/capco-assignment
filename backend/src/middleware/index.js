const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log(`⭐️[${req.url}] time:${Date.now()} `);
  next();
});

module.exports = router;
