const newsData = require('../public/news.json');
const express = require('express');
const router = express.Router();

router.get('/api/news', function (req, res) {
  res.json(newsData);
});

module.exports = router;
