const mongoose = require('mongoose');
const Destination = require('../models/destination');


const bookingSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confrimed']
    },
    destination: {
        type: mongoose.Types.ObjectId,
        ref: "Destination"
    }
})

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;