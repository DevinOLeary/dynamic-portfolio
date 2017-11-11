const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const {mongoose} = require('../db/mongoose');
const {About} = require('../models/about');
const {Photo} = require('../models/photos');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

// routes for about info
router.post('/about', (req,res) => {
  let about = new About({
    content: req.body.content,
    period: req.body.period
  });
  about.save().then((doc) => {
    res.send({doc});
  }, (err) => {
    res.status(400).send(err);
  });
});

router.get('/about', (req, res) => {
  About.find().then((info) => {
    res.send({info});
  }, (err) => {
    res.status(400).send();
  });
});

router.delete('/about/:id', (req, res) => {
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

router.patch('/about/:id', (req, res) => {
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

//add new photo
router.post('/photos', (req,res) => {
  if(!req.files){
    res.status(400).send('No files were uploaded');
    console.log('No files')
  }

  let imageFile = req.files.imageFile;
  let photo = new Photo({
    image: imageFile.data,
    category: req.body.category,
    location: req.body.location,
    description: req.body.description
  });

  photo.save().then((doc) => {
    res.send({doc});
  }, (err) => {
    res.status(400).send(err);
    console.log('It didn\'t work');
  });
});

//lookup all photos
router.get('/photos', (req, res) => {
  Photo.find().then((info) => {
    res.send({info});
  }, (err) => {
    res.status(400).send();
  });
});

//delete single photo
router.delete('/photos/:id', (req, res) => {
  let id = req.params.id;
  if(!ObjectID.isValid){
    return res.status(404).send();
  }

  Photo.findOneAndRemove({
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

router.patch('/photos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['image', 'description', 'category', 'location']);

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Photo.findOneAndUpdate({
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


module.exports = router;
