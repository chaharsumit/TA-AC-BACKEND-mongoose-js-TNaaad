let mongoose = require('mongoose');

let express = require('express');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : "Database Connected");
})