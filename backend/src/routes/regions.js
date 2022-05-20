const regionsData = require('../public/regions.json');
const express = require('express');
const router = express.Router();

router.get('/api/regions', function (req, res) {
  res.json(regionsData);
});

module.exports = router;
