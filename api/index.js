const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

const cors = require('cors');

const BookInfoModel = require('./models/BookInfo');





dotenv.config();
mongoose.connect(process.env.MONGO_URL);
mongoose.set("strictQuery", true);


const app = express();
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL,
}));


app.get('/test', (req,res) => {
  res.json('test ok');
});


app.post('/addBook' , async(req,res)=>{
  const details = req.body;
  console.log(details);

  const postDetails = await BookInfoModel.create({
    title : details.title,
  author : details.author,
  review : details.review,
  rate : details.rate,
  name : details.name,
  mobile : details.mobile,
  email : details.email ,
  // img : String,
  })
})

app.get("/display" , async(req,res)=>{
  const details = await BookInfoModel.find({})
  res.send(details)

  })
app.listen(4040)