var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var helmet = require('helmet');
var mongoose = require('mongoose');
var bodyparser = require('body-parser')

var indexRouter = require('./routes');
var config = require('./config');
var ApiError = require('./helpers/ApiError')
var app = express();


mongoose.connect(config.mongoUrl, { useNewUrlParser: true });
mongoose.connection.on('connected', () =>{
  console.log('\x1b[32m%s\x1b[0m', '[DB] Connected...');
} );
mongoose.connection.on('error', err => console.log('\x1b[31m%s\x1b[0m', '[DB] Error : ' + err));
mongoose.connection.on('disconnected', () => console.log('\x1b[31m%s\x1b[0m', '[DB] Disconnected...'));



app.use(cors());
app.disable('x-powered-by')
app.use(helmet())

app.use(bodyparser.json({ limit: '1000mb' }));
app.use(bodyparser.urlencoded({ limit: '1000mb', extended: true, parameterLimit: 50000 }));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));





app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//ERROR Handler
app.use((err, req, res, next) => {

  if (err instanceof mongoose.CastError)
      err = new ApiError.NotFound(err) ||  new ApiError.NotFound(err.model.modelName)  ;

  res.status(err.status || 500).json({
      errors: err.message 
  });
  
});


module.exports = app;
