const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

router.get('/', (req, res) => {
  Player.find({}, (err, players) => {
    res.send(players);
  });
});

module.exports = router;