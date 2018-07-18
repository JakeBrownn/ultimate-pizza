const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// 
router.post('/', (req, res) => {
  const newPlayer = new Player({
    username: req.body.username,
    score: req.body.score
  });

  // Save player Username and Score into DB
  newPlayer.save()
    .then(() => res.status(200).send())
    .catch((error) => res.status(500).send());
});

module.exports = router;