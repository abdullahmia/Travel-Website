const express = require('express');
const router = express.Router();

// import bookings view functions
const {create, getBooking, getUserBooking, deleteBooking, updateBooking} = require('../controllers/booking')

router.post('/create', create);
router.get('/', getBooking);
router.get('/user/:email', getUserBooking)
router.delete('/delete/:id', deleteBooking);
router.put('/update/:id', updateBooking)

module.exports = router;