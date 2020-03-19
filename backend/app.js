const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const indexRouter = require('./routes');
const config = require('./config');
const ApiError = require('./helpers/ApiError');
const app = express();


mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    retryWrites: false,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('\x1b[32m%s\x1b[0m', '[DB] Connected...');
});
mongoose.connection.on('error', err => console.log('\x1b[31m%s\x1b[0m', '[DB] Error : ' + err));
mongoose.connection.on('disconnected', () => console.log('\x1b[31m%s\x1b[0m', '[DB] Disconnected...'));


app.use(cors());
app.disable('x-powered-by');

app.use(helmet());


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

//ERROR Handler
app.use((err, req, res, next) => {

    if (err instanceof mongoose.CastError)
        err = new ApiError.NotFound(err) || new ApiError.NotFound(err.model.modelName);

    res.status(err.status || 500).json({
        errors: err.message
    });

});

module.exports = app;
