const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const projectController = require('../controllers/projectController');

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


  //Agregar Projec
  router.post('/project',projectController.newProject);
  //Obtener proyecto via GET
  router.get('/project',projectController.showProjects);
  //Obtener proyecto especifico por su is via GET
  router.get('/project/:id',projectController.showProjectById);
  //Editar Proyecto via PUT
  router.put('/project/:id',projectController.updateProject);
  //Eliminar Proyecto via DELETE
  router.delete('/project/:id',projectController.deletedProject); 

  return router;
}