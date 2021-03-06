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


//GET method for retrieving photos
router.get('/:category', (req, res) => {
  const category = req.params.category;
  let s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY,
    region: "us-east-1",
    Bucket: BUCKET_NAME
  });
  Photo.find({category}).then((docs) => {
    if(!docs || docs.length === 0){
      return res.status(404).send('No Images Found');
    } else if(docs.length === 1){
      //return single photo
      let params = {
        Bucket: BUCKET_NAME,
        Key: docs[0].image
      }
      s3Bucket.getSignedUrl('getObject',params, (err, data) => {
        if(err){
          return res.status(400).send(err);
        }
        res.send({data});
      });
    } else if(docs.length > 1){
      //create an array of photo objects
      let picArray = [];

      for (let i = 0; i < docs.length; i++){
        let params = {
          Bucket: BUCKET_NAME,
          Key: docs[i].image
        }
        let url = s3Bucket.getSignedUrl('getObject', params);
        let imageObject = {
          data: url,
          category: docs[i].category,
          location: docs[i].location,
          id: docs[i]._id
        };
        picArray.push(imageObject);
      }
      //return picArray
      res.send({picArray});
    };
  })
  .catch((err) => {
    res.status(404).send(err);
  });
});

// router.delete('/:id', (req, res) => {
//   const id = req.params.id;
//   Photo.findById(id).then((doc) => {
//     let s3Bucket = new AWS.S3({
//       accessKeyId: process.env.AWS_ACCESS_ID,
//       secretAccessKey: process.env.AWS_ACCESS_KEY,
//       region: "us-east-1",
//       Bucket: BUCKET_NAME
//     });
//     let params = {
//       Bucket: BUCKET_NAME,
//       Key: doc.image
//     }
//     s3Bucket.deleteObject(params, (err, data) => {
//       if(err){
//         res.status(400).send(err);
//       } else {res.send(data);}
//     });
//   }).catch((err) => {
//     res.status(404).send(err);
//   });
// });


module.exports = router;
