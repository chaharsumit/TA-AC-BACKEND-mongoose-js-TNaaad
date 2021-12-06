let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');
const { application } = require('express');

let app = express();

mongoose.connect("mongodb://localhost/sample", (err) => {
  console.log(err ? err : 'database is connected to mongo');
})


app.listen(4000, () => {
  console.log('server is listening on port:4000');
})