let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  age: Number,
}, { timestamps: true });

let user = mongoose.model('User', userSchema);

module.exports = user;