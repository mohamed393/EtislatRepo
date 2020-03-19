var express = require('express');
var router = express.Router();

var gradeRoute = require('./grade.route')
var userRoute = require('./user.route')


router.use('/grade',gradeRoute);
router.use('/user',userRoute);

module.exports = router;
