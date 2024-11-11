const mongoose = require('mongoose');

const bookingsSchema = mongoose.Schema({
    user_id : {type:String, required:true},
    item_id : {type:String, required:true},
    date : {type:String, required:true},
    time : {type:String, required:true},
    time_period: {type:Number, required:true},
})


const bookingsModel = mongoose.model("bookings",bookingsSchema)

module.exports = bookingsModel;
