const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    name: { type: String, required: true },
    imgsrc: { type: String, required: true }
})


const categoriesModel = mongoose.model("categories",categoriesSchema)

module.exports = categoriesModel;
