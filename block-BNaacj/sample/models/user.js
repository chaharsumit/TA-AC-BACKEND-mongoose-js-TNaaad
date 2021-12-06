let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  password: { type: String, required: true, minlength: 5, maxlength: 15},
  createAt: { type: Date, default: new Date() }
}, { timestamps: true });