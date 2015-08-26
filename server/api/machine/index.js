'use strict';

var express = require('express');
var controller = require('./machine.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.detail);

module.exports = router;
