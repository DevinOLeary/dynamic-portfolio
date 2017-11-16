const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const fs = require('fs');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const router = express.Router();

const {mongoose} = require('../db/mongoose');
const {Photo} = require('../models/photos');



const upload = multer({dest: 'uploads/', limits: {fileSize: 500000}});

router.post('/', upload.single('file'), (req, res) => {
  const newImage = fs.readFileSync(req.file.path);
  const encImage = newImage.toString('base64');
  const photo = new Photo({
    image: Buffer(encImage, 'base64'),
    contentType: req.file.mimetype,
    category: req.body.category,
    location: req.body.location,
    description: req.body.description
  });

  photo.save().then((doc) => {
    res.send({doc});
  }).catch((err) => {
    res.status(400).send(err);
  });

});

router.get('/:category', (req, res) => {
  const category = req.params.category;
  Photo.find({category}).then((docs) => {
    res.send(docs);
  }).catch((err) => {
    res.status(404).send(err);
  });
});


module.exports = router;
