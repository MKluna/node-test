//habilitar mongoose
const mongoose = require('mongoose');
//habilitar dotenv
require('dotenv').config({path:'variables.env'});

//configuracion de mongoose
const connectDB = async()=>{
  mongoose.set('useCreateIndex',true);
  try {
    await mongoose.connect(process.env.DB,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false
    });
    console.log('DB connect');
  } catch (error) {
    console.log('An error ocurred',error);
    process.exit(1);
  }
}

//exportacion
module.exports = connectDB;