let express = require('express');
let mongoose = require('mongoose');
let User = require('./models/user');

mongoose.connect('mongodb://localhost/sample', (err) => {
  console.log(err ? err : "DataBase is connected");
})

let app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('welcome to home page');
});

app.post('/users', (req, res, next) => {
  User.create(req.body, (err, users) => {
    if(err){
      next(err);
    }
    res.json(users);
  });
});

app.get('/users', (req, res, next) => {
  User.find({}, (err, users) => {
    if(err){
      next(err);
    }
    res.json(users);
  })
});

app.get('/users/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if(err){
      next(err);
    }
    res.json(user);
  });
});

app.put('/users/:id', (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {next: true}, (err, updatedData) => {
    if(err){
      next(err);
    }
    res.json(updatedData);
  })
});

app.delete('/users/:id', (req, res, next) => {
  User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    if(err){
      next(err);
    }
    res.send('user deleted');
  });
})

app.use((req, res) => {
  res.send('404 page not found');
})

app.use((err, req, res, next) => {
  res.send(err);
})

app.listen(4000, () => {
  console.log('server is lisening on port:4000');
});