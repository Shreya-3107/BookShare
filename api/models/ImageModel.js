const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    title : String,
  author : String,
  review : String,
  rate : String,
  name : String,
  mobile : Number,
  email : String,
  isRented : Boolean,
    image : {
      data : Buffer,
      contentType : String
    }
  })

  module.exports = ImageModel =mongoose.model("imageModel" , ImageSchema)