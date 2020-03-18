var express = require('express');
var router = express.Router();

var gradeRoute = require('./grade.route')


router.use('/grade',gradeRoute);

module.exports = router;
