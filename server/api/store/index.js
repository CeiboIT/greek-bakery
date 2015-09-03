'use strict';

var express = require('express');
var controller = require('./store.controller');

var router = express.Router();

router.get('/sale', controller.sales.index);
router.get('/sale/:id', controller.sales.detail);

module.exports = router;