const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const router = express.Router();

const {mongoose} = require('../db/mongoose');
const {Photo} = require('../models/photos');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  }
});

const upload = multer({storage});

router.post('/', upload.single('file'), (req, res) => {

  let photo = new Photo({
    image: req.file,
    category: req.body.category,
    location: req.body.location,
    description: req.body.description
  });

  if(!photo){
    res.status(400).send('photo not found');
  }
  photo.save().then((doc) => {
    res.send({doc});
  }).catch((err) => {
    res.status(400).send('photo upload error', err);
  });

});

router.get('/', (req, res) => {
  Photo.find().then((docs) => {
    res.send({docs});
  }).catch((err) => {
    res.status(404).send('photos not found', err);
  });
});


module.exports = router;
