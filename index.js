//habilitar express
const express = require('express');
//habilitar dotenv
require('dotenv').config({path:'variables.env'});
//crear carpeta "config" , dentro de config crear el archivo db.js
const connectDB = require('./config/db');
//Inicializar "app"
const app = express();
//Traer las rutas
const routes = require('./routes/index');
//Ejecutar connectDB
connectDB();
//Ejecutar "app"
app.use(express.json({extended:true}));

//Rutas de la app
app.use('/',routes())

const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port,host,()=>{
  console.log('Server run in ',port);
})
