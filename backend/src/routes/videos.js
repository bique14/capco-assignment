const videosData = require('../public/video.json');
const express = require('express');
const router = express.Router();

router.get('/api/videos', function (req, res) {
  res.json(videosData);
});

module.exports = router;
