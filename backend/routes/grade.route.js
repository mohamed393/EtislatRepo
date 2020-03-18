var express = require('express');
var router = express.Router();
var gradeController = require('../controllers/grade.controller')

router.route('/')
    .get(gradeController.findAll)
    .post()



router.route('/:id')
    .put()
    .delete()
    .get()


module.exports = router;