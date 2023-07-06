const authorize = require('../middleware/authorize');
const Role = require('../helpers/role');
const express = require('express');
const router = express.Router();
const {
    bingIndex,
} = require('../controllers/bingIndex.controller');
router.post('/bing/index', bingIndex);

module.exports = router;