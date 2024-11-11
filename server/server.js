const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
const path = require('path');
const mongoose = require('mongoose');
const itemsModel = require("./models/Item")
const categoriesModel = require("./models/category")
const JWT  = require("jsonwebtoken"); 
const usersModel = require('./models/users');
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// Serving the uploaded files over the api
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


// get all categories

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

// add new categories

app.get("/category",async (req, res) => {
    try {
        const categories = await categoriesModel.find(); // Retrieve all categories from the database
        res.status(200).json(categories); // Send categories as JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
})


// Get all listings

app.get("/api/listing",async(req,res)=>{
    const cat_id = req.query.cat_id 
    try {
        var categories
        if(!cat_id){
        categories = await itemsModel.find();
    }else{  
        categories = await itemsModel.find({cat_id:cat_id});
    }
        res.status(200).json(categories); // Send categories as JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
})


// Get a specific listing

app.get("/api/listing/:id",async(req,res)=>{
    var id = req.params.id  
    try {   
        const listing = await itemsModel.find({_id:id})
        res.status(200).json(listing); // Send categories as JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
})
app.delete("/api/admin/listing/:id",async(req,res)=>{
    var id = req.params.id  
    try {   
        const listing = await itemsModel.find({_id:id})
        listing.remove()
        res.status(200).json(listing); // Send categories as JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
})
// Add new listing
app.post("/api/admin/listing",upload.single("item_img"),async(req,res)=>{
    let item_name = req.body.item_name
    let item_desc = req.body.item_desc
    let item_price = req.body.item_price
    let cat_id= req.body.cat_id
    let img_path = req.file.filename 
    let rating = req.body.rating 
    let type = req.body.type 
    const Item = new itemsModel({name:item_name,desc:item_desc,price:item_price,cat_id:cat_id,imgsrc:img_path,rating:rating,type:type}) 
     try {
        const newItem = await Item.save();
        res.status(201).json(newItem);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    } 
})

app.post("/api/bookings",authorize_token,async(req,res)=>{
    let user_id = req.body.user_id
    let item_id = req.body.item_id
    let date = req.body.date
    let time = req.body.time
    let time_period = req.body.time_period
    const booking = new bookingsModel({user_id:user_id,item_id:item_id,date:date,time:time,time_period:time_period}) 
     try {
        const newBooking = await booking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    } 
})
app.get("/api/admin/bookings",authorize_token,async(req,res)=>{
    try {
        const bookings = await bookingsModel.find(); // Retrieve all categories from the database
        res.status(200).json(bookings); // Send categories as JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
}
)


// Login
app.post("/login",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user = await usersModel.findOne({username:username})
    if(!user) return res.status(403).json({message:"Not authorized"})
    if(user?.password!=password) return res.status(403).json({message:"Not authorized"})
else{
    const userObj = {username:username,email:user?.email,password:password}
    const access_tkn = JWT.sign(userObj,process.env.ACCESSTOKEN)
    return res.status(200).json({message:access_tkn,status:200})}
})
app.post("/register",async(req,res)=>{
    const email = req.body.email
    const username = req.body.username;
    const password = req.body.password; 
    try {
        const newUser = new usersModel({email,username,password})
        const savedUser = await newUser.save();
        const userObj = {username:username,email:email,password:password}
        const access_tkn = JWT.sign(userObj,process.env.ACCESSTOKEN)
        return res.status(200).json({message:access_tkn}) 
    }catch(error){
        if(error.code == 11000){
           return res.status(400).json({message:"User already exists"})
        }
        res.status(400).json({message:error.message})
    }
})

// JWT authorize middleware

function authorize_token(req,res,next){
    const auth_tkn = req.headers["authorization"]
    const token = auth_tkn?.split(" ")[1]
    if(token == null){
        res.status(401).json({message:"Bad request, no auth"})
    }
    JWT.verify(token,process.env.ACCESSTOKEN,(err,user)=>{
        if(err) return res.status(403).json({message:"Invalid token"})
        req.user=user;
        next();
    })
}