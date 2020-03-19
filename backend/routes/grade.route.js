const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/grade.controller');

router.route('/')
    .get(gradeController.findAll)
    .post(gradeController.create);

router.route('/:id')
    .put(gradeController.update)
    .delete(gradeController.delete)
    .get(gradeController.findById);


module.exports = router;