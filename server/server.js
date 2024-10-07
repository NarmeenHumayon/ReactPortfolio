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
app.get('/uploads/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'uploads', filename);

    res.sendFile(filePath, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.status(404).json({ message: 'Image not found' });
            } else {
                console.error('Error sending file:', err);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    });
});
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
app.get("/category",async (req, res) => {
    try {
        const categories = await categoriesModel.find(); // Retrieve all categories from the database
        res.status(200).json(categories); // Send categories as JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
})
app.post("/item",upload.single("item_img"),async(req,res)=>{
    let item_name = req.body.item_name
    let item_desc = req.body.item_desc
    let item_price = req.body.item_price
    let cat_id= req.body.cat_id
    let img_path = req.file.filename 
    let rating = req.body.rating 
    let type = req.body.type 
    console.log(rating,type)
    const Item = new itemsModel({name:item_name,desc:item_desc,price:item_price,cat_id:cat_id,imgsrc:img_path,rating:rating,type:type}) 
     try {
        const newItem = await Item.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    } 
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
