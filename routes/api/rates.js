const express = require('express');
const RateController = require('./controller/ratec');
const url = require('url');


const router = express.Router();
router.get('/', RateController.ratec);


module.exports = router;