/*
  * Create User schema,
  * used when a player submits their score
*/


const mongoose = require('mongoose');
const { Schema } = mongoose;    // const Schema = mongoose.Schema;

const playerSchema = new Schema({
  username: String,
  score: Number
});

module.exports = (Player) = mongoose.model('Player', playerSchema);