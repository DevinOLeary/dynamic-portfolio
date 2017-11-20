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
const {Project} = require('../models/projects');

const BUCKET_NAME = process.env.S3_BUCKET_NAME;

const upload = multer({dest: 'uploads/'});

router.post('/', upload.array('files'), (req,res) => {
  let array = [];
  req.files.forEach((file) => {
    array.push(file.originalname);
  });
  const project = new Project({
    imageArray: array,
    category: req.body.category,
    description: req.body.description,
    title: req.body.title,
    link: req.body.link,
    coverImage: req.files[0].originalname
  });

  project.save().then((doc) => {
    res.send({doc});
  }).catch((err) => {
    res.status(400).send(err);
  });
});

router.get('/', (req, res) => {
  Project.find().then((docs) => {
    if(!docs){
      return res.status(404).send(err);
    }
    let s3Bucket = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_ID,
      secretAccessKey: process.env.AWS_ACCESS_KEY,
      region: "us-east-1",
      Bucket: BUCKET_NAME
    });
    let objArray = [];
    for (let i = 0; i < docs.length; i++){
      let params = {
        Bucket: BUCKET_NAME,
        Key: docs[i].coverImage
      }
      let url = s3Bucket.getSignedUrl('getObject', params);
      let imageObject = {
        title: docs[i].title,
        category: docs[i].category,
        coverImage: url
      };
      objArray.push(imageObject);
    }
    res.send({objArray});
  }).catch((err) => {
    return res.status(404).send(err);
  });
});

router.get('/:title', (req, res) => {
  const title = req.params.title;
  Project.find({title}).then((docs) => {
    if(!docs){
      return res.status(404).send(err);
    }
    let s3Bucket = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_ID,
      secretAccessKey: process.env.AWS_ACCESS_KEY,
      region: "us-east-1",
      Bucket: BUCKET_NAME
    });
    const imageArray = docs.imageArray;
    let urlArray = [];
    for (let i = 0; i < imageArray.length; i++){
      let params = {
        Bucket: BUCKET_NAME,
        Key: imageArray[i]
      }
      let url = s3Bucket.getSignedUrl('getObject', params);
      urlArray.push(url);
    }
    const projectObject = {
      title: docs.title,
      description: docs.description,
      link: docs.link,
      imageArray: urlArray
    }
    res.send({projectObject});
  }).catch((err) => {
    return res.status(404).send(err);
  });
});

module.exports = router;
