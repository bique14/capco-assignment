const newsData = require('../public/news.json');
const express = require('express');
const router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/api/news', function (req, res) {
  res.json(newsData);
});

module.exports = router;
