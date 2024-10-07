const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
const path = require('path');
const mongoose = require('mongoose');
const itemsModel = require("./models/Item")
const categoriesModel = require("./models/category")
require("dotenv").config()

mongoose.connect(process.env.CONNECTION_STRING)
const app = express();
const PORT = process.env.PORT || 5000;
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        return cb(null,"./uploads")
    },
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
});
const upload = multer({storage:storage})
app.use(cors());
app.use(bodyParser.json());
app.post('/category',upload.single("cat_img"), async(req, res) => {
    let cat_name = req.body.cat_name
    let img_path = req.file.filename
    console.log(cat_name,img_path)
    const newcategory = new categoriesModel({name:cat_name,imgsrc:img_path}) 
     try {
        const savedCategory = await newcategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    } 
}); 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
