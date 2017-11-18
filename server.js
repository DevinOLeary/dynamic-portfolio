const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const bcrypt = require('bcryptjs');
const aboutRoutes = require('./routes/about');
const photoRoutes = require('./routes/photos');

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');
const app = express();


//server client static files
app.use(express.static(`${__dirname}/client/build`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/api/about', aboutRoutes);
app.use('/api/photos', photoRoutes);
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/build`);
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



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend is running on ${PORT}`);
});
