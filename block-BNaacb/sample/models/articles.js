let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let articlesSchema = new Schema({
  Title: String,
  Author: String,
  Published: String,
})