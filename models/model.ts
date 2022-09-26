import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  account:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true
  }
})

module.exports = mongoose.model("Article",articleSchema)