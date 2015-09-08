'use strict';

var express = require('express');
var controller = require('./label.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.detail);

module.exports = router;
