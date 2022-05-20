const tvData = require('../public/tv.json');
const express = require('express');
const router = express.Router();

router.get('/api/tv', function (req, res) {
  res.json(tvData);
});

module.exports = router;
