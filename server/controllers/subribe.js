const Subcribe = require('../models/subcribe') 

exports.createSubscribe = async (req, res) => {
    const newSubscribe = await new Subcribe(req.body);
    newSubscribe.save((error, sub) => {
        if(error){
            res.status(400).json({
                message: "There was server side error"
            })
        }
        res.status(200).json({
            message: "Subscribed",
            data: sub
        })
    })
}