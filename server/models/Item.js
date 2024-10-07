const mongoose = require('mongoose');

const itemsSchema = mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true },
    type: { type: String, required: true },
    cat_id: { type: String, required: true },
    imgsrc: { type: String, required: true }
})
const itemsModel = mongoose.model("items",itemsSchema)
module.exports = itemsModel;