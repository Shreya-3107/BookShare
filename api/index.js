const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");

const cors = require("cors");

const BookInfoModel = require("./models/BookInfo");
const ImageModel = require("./models/ImageModel")
const multer = require("multer");

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
mongoose.set("strictQuery", true);

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

const Storage = multer.diskStorage({
  destination : "uploads",
  filename : (req,file , cb)=>{
    cb(null,Date.now + file.originalname)
  }
})

const upload = multer({
  storage : Storage 
}).single("testimage")


app.get("/test", (req, res) => {
  res.json("test ok");
});

app.post("/addBook", async (req, res) => {
  const details = req.body;
  console.log(details);
if(details.isRented == false){
  await BookInfoModel.updateOne({"_id" : details.id}, { $set : {isRented : true}})
  setTimeout(async()=>{
    await BookInfoModel.deleteOne({"_id" : details.id});
  },2000)
 
  console.log("deletion done");
}else{
  const postDetails = await BookInfoModel.create({
    title: details.title,
    author: details.author,
    review: details.review,
    rate: details.rate,
    name: details.name,
    mobile: details.mobile,
    email: details.email,
    isRented : false,
    myFile :details.myFile
  });
}
 
});


app.post("/upload" , (req,res)=>{
  upload(req,res,(err)=>{
    if(err){
      console.log(err);
    }
    else{
      const newImage = new ImageModel({
        name : req.body.name,
        image : {
          data :req.file.filename,
          contentType : "image/png",        
}
      })
      newImage.save().then(()=>res.send("succes :)"))
    }
  })
})

app.get("/display", async (req, res) => {
  const details = await BookInfoModel.find({});
  res.send(details);
});
app.listen(4040);
