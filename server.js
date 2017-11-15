const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');
const aboutRoutes = require('./routes/about');
const photoRoutes = require('./routes/photos');

const {mongoose} = require('./db/mongoose');


const app = express();
const PORT = process.env.PORT || 3001;

//server client static files
app.use(express.static(`${__dirname}/client/build`));
app.use('/api/about', aboutRoutes);
app.use('/api/photos', photoRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());




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
