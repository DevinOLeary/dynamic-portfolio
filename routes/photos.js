const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const fs = require('fs');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const router = express.Router();
const AWS = require('aws-sdk');

const {mongoose} = require('../db/mongoose');
const {Photo} = require('../models/photos');

const IAM_USER_ID = process.env.AWS_ACCESS_ID;
const IAM_USER_KEY = process.env.AWS_ACCESS_KEY;
const BUCKET_NAME = process.env.S3_BUCKET_NAME;

const upload = multer({dest: 'uploads/', limits: {fileSize: 500000}});

router.post('/', upload.single('file'), (req, res) => {
  const photo = new Photo({
    image: req.file.originalname,
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
  let s3Bucket = new AWS.S3({
    accessKeyId: IAM_USER_ID,
    secretAccessKey: IAM_USER_KEY,
    Bucket: BUCKET_NAME
  });
  Photo.find({category}).then((docs) => {
    console.log(`open ${docs}`);
    if(!docs || docs.length === 0){
      return res.status(404).send('No Images Found');
    } else if(docs.length === 1){
      s3Bucket.createBucket(() => {
        console.log(`single image ${docs}`);
        let params = {
          Bucket: BUCKET_NAME,
          Key: docs.image
        }
        s3Bucket.getSignedUrl('getObject',params, (err, url) => {
          if(err){
            return res.status(400).send(err);
          }
          res.send(url);
        });
      });
    } else if(docs.length > 1){
      let picArray = [];
      docs.forEach((doc) => {
        s3Bucket.createBucket(() => {
          let params = {
            Bucket: BUCKET_NAME,
            Key: doc.image
          }

          s3Bucket.getSignedUrl('getObject',params, (err, url) => {
            if(err){
              return res.status(400).send(err);
            }
            picArray.push(url);
          });
        });
      });
      res.send(picArray);
    };
  })
  .catch((err) => {
    res.status(404).send(err);
  });
});


module.exports = router;
