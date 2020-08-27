const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  lastName:{
    type:String,
    required:true,
    trim:true
  },
  birth:{
    type:Date,
    required:false
  },
  age:{
    type:Number,
    required:true,
    trim:true
  },
  created:{
    type:Date,
    default:Date.now()
  }
})

module.exports= mongoose.model('Student',StudentSchema);