const authorize = require('../middleware/authorize');
const Role = require('../helpers/role');
const express = require('express');
const router = express.Router();
const {
    indexGG,
    indexBatchGG
} = require('../controllers/googleIndex.controller');
router.post('/google/index/:link', indexGG);
router.post('/google/batchIndex', indexBatchGG);

module.exports = router;