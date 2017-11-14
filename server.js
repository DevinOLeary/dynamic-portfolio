const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');
const multer = require('multer');

const {mongoose} = require('./db/mongoose');
const {About} = require('./models/about');
const {Photo} = require('./models/photos');


const app = express();
const PORT = process.env.PORT || 3001;

//server client static files
app.use(express.static(`${__dirname}/client/build`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
const upload = multer({ dest: 'uploads/'})

app.post('/api/about', (req,res) => {
  let about = new About({
    header: req.body.header,
    period: req.body.period,
    content: req.body.content
  });
  about.save().then((doc) => {
    res.send({doc});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/api/about', (req, res) => {
  About.find().then((info) => {
    res.send({info});
  }, (err) => {
    res.status(400).send();
  });
});

app.delete('/api/about/:id', (req, res) => {
  let id = req.params.id;
  if(!ObjectID.isValid){
    return res.status(404).send();
  }

  About.findOneAndRemove({
    _id: id
  }).then((item) => {
    if(!item){
      res.status(404).send();
    }
    res.send({item});
  }).catch((err) => {
    res.status(404).send();
  });
});

app.patch('/api/about/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['content', 'header', 'period']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  About.findOneAndUpdate({
    _id: id
  }, {
    $set: body
  }, {
    new: true
  }).then((item) => {
    if(!item){
      res.status(404).send();
    }

    res.send({item});
  }).catch((err) => {
    res.status(404).send(err);
  });
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Request did not go through');
  err.status = 404;
  console.log(err);
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});





app.listen(PORT, () => {
  console.log(`Backend is running on ${PORT}`);
});

module.exports = {
  app
};
