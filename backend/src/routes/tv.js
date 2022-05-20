const tvData = require('../public/tv.json');
const express = require('express');
const router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/api/tv', function (req, res) {
  res.json(tvData);
});

module.exports = router;
