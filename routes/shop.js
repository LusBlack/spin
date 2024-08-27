const path = require('path');

const express = require('express');

const router = express.Router();

const shop = require('../controllers/shop');



router.get('/', shop);

module.exports = router;