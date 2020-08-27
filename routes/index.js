const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

module.exports=function(){

  // Agregar estudiante via POST
  router.post('/student',studentController.newStudent);
  // Obtener estudiantes via GET
  router.get('/student',studentController.showStudents);
  //Obtener estudiante especifico por su id via GET
  router.get('/student/:id',studentController.showStudentById);
  //Editar Estudiante via PUT
  router.put('/student/:id',studentController.updateStudent);
  //Eliminar Estudiante via DELETE
  router.delete('/student/:id',studentController.deletedStudent);

  return router;
}