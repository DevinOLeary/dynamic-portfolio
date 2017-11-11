const express = require('express');
const router = express.Router();
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const {mongoose} = require('../db/mongoose');

const {About} = require('../models/about');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

router.post('/about', (req,res) => {
  let about = new About({
    content: req.body.content,
    period: req.body.period
  });
  about.save().then((doc) => {
    res.send(doc);
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


module.exports = router;
