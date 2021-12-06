let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  favourites: [String],
  marks: [Number],
}) 