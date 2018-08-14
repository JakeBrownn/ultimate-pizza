const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.get('/', (req, res) => {
  Player.find({}, null, {sort: {score: -1}}, (err, players) => {
    res.send(players);
  })
});

module.exports = router;