const Booking = require('../models/booking');

exports.create = async (req, res) => {
    const newBooking = await new Booking(req.body.data);
    newBooking.save((error, booking) => {
        if(error){
            res.status(400).json({
                message: "there was server side error"
            })
        }
        res.status(200).json({
            message: "Destination added on bookings",
            result: booking
        })
    })
}

exports.getBooking = async (req, res) => {
    await Booking.find({}, (error, data) => {
        if(error){
            res.status(400).json({
                message: "there was server side error"
            })
        }
        res.status(200).json({
            data: data
        })
    }).populate('destination')
}

exports.getUserBooking = async (req, res) => {
    await Booking.find({email: req.params.email}, (error, data) => {
        if(error){
            res.status(400).json({
                message: "there was server side error"
            })
        }
        res.status(200).json({
            data: data
        })
    }).populate('destination')
}


exports.deleteBooking = async (req, res) => {
    await Booking.deleteOne({_id: req.params.id}, (error) => {
        if(error){
            res.status(400).json({
                message: "There was a server side error"
            })
        }else {
            res.status(200).json({
                message: "Booking is delete"
            })
        }
    })
}

exports.updateBooking = async (req, res) => {
    const filter = {_id: req.params.id}
    const update = {status: "confirm"}

    const result = await Booking.findOneAndUpdate(filter, update, {new: true});
    res.status(200).json({
        message: "Booking Confrimed",
    })

}