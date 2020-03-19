const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.route('/')
    .get(userController.findAll)
    .post(userController.validateUser(), userController.create);

router.route('/:id')
    .delete(userController.delete);

module.exports = router;