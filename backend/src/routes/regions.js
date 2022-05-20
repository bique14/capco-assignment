const regionsData = require('../public/regions.json');
const express = require('express');
const router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/api/regions', function (req, res) {
  res.json(regionsData);
});

module.exports = router;
