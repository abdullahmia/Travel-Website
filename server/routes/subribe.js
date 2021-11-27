const express = require('express');
const router = express.Router();

const {createSubscribe} = require('../controllers/subribe')

router.post('/create', createSubscribe);


module.exports = router;