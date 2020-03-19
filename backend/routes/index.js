const express = require('express');
const router = express.Router();

const gradeRoute = require('./grade.route');
const userRoute = require('./user.route');


router.use('/grade',gradeRoute);
router.use('/user',userRoute);

module.exports = router;
