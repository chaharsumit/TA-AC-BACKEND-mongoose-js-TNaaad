let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: { type: String, default : 0 },
  email: { type: String, lowercase: true},
  age: Number,
}, { timestamps: true });