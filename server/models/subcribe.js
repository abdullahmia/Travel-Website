const mongoose = require('mongoose');

const subcribeSchema =  mongoose.Schema({
    email: {
        type: String,
        required: true
    }
}, {timeStamp: true});

const Subcribe = mongoose.model('Subcribe', subcribeSchema);
module.exports = Subcribe;