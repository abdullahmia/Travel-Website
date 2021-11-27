const Destination = require('../models/destination');


// get all the destinations
exports.getDetinations = async (req, res) => {
    await Destination.find({}, (error, data) => {
        if(error){
            res.status(400).json({
                message: "There was server side error"
            })
        }
        res.status(200).json({
            message: "Success",
            result: data
        })
    })
}


// add a destinations
exports.create = async (req, res) => {
    const createDestination = await new Destination(req.body);
    createDestination.save((error, destination) => {
        if(error){
            res.status(400).json({
                message: "there ware server side error"
            })
        }
        res.status(200).json({
            message: "Destination is added",
            result: destination
        })
    })
}