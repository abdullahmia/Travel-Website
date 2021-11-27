const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();


// Import all routes
const destinationRoutes = require('./routes/destination');
const bookingRoutes = require('./routes/booking');
const subscribeRoutes = require('./routes/subribe');

// Database configuration
mongoose.connect(`mongodb+srv://${process.env.db_username}:${process.env.db_password}@homie.s07bu.mongodb.net/TravelWebApp?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Database is connected");
    })
    .catch(error => {
        console.log(error)
    })

// mongoose.connect(`mongodb://127.0.0.1:27017/travel`)
//     .then(() => {
//         console.log("Database is connected");
//     })
//     .catch(error => {
//         console.log(error)
//     })


// initilize the app
const app = express();

// middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());



// route middlware
app.use('/destination', destinationRoutes);
app.use('/booking', bookingRoutes);
app.use('/subscribe', subscribeRoutes);


// server configuration
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is playing at ${port}`);
})