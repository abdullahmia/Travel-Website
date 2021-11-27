const express = require("express");
const router = express.Router();

// import methods of destination view
const {getDetinations, create} = require('../controllers/destination');

// get all destinations
router.get('/', getDetinations);
router.post('/create', create);

module.exports = router;