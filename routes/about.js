const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const fs = require('fs');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');
const router = express.Router();

const {mongoose} = require('../db/mongoose');
const {About} = require('../models/about');

router.post('/', (req,res) => {
  const about = new About({
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

router.get('/', (req, res) => {
  About.find().then((data) => {
    res.send({data});
  }, (err) => {
    res.status(400).send();
  });
});

router.delete('/:id', (req, res) => {
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

router.patch('/:id', (req, res) => {
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


module.exports = router;
