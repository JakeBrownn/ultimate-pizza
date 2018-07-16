/*
  * Create User schema,
  * used when a player submits their score
*/


const mongoose = require('mongoose');
const { Schema } = mongoose;    // const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  score: Number
});

mongoose.model('users', userSchema);