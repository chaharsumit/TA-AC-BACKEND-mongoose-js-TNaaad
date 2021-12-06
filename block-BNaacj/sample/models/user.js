let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  password: { type: String, required: true, min: 5, max: 15},
  createAt: { type: Date, default: new Date() }
}, { timestamps: true });