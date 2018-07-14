const mongoose = require('mongoose');
const { Schema } = mongoose;    // const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String
});

mongoose.model('users', userSchema);