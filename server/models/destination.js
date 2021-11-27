const mongoose = require('mongoose');


const destinationSchema = mongoose.Schema({
    name: {
        type: String,
        requird: true,
    },
    price: {
        type: Number,
        required: true
    },
    daytrip: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    }
}, {timeStamp: true});

const Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination;