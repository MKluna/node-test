const Student = require('../models/Student');

//*NUEVO ESTUDIANTE*
exports.newStudent=async(req,res,next)=>{
  const student = new Student(req.body);
  try {
    await student.save()
    res.json({mensaje:'Succesfull Create'})
  } catch (error) {
    res.send(error);
    next()
  }
}

//*MOSTRAR TODOS LOS ESTUDIANTES
exports.showStudents=async(req,res,next)=>{
  try {
    const student = await Student.find({})
    res.json(student)
  } catch (error) {
    res.send(error);
    next();
  }
}

//*MOSTRAR ESTUDIANTE SEGUN SU ID*
exports.showStudentById=async(req,res,next)=>{
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.json({mensaje:'Student not found'});
    next();
  }
  res.json(student);
}

//*EDITAR ESTUDIANTE*
exports.updateStudent=async(req,res,next)=>{
  try {
    const student = await Student.findOneAndUpdate({_id:req.params.id},req.body,{new:true});
    res.json(student)
  } catch (error) {
    res.send(error);
    next()
  }
}

//*ELIMINAR ESTUDIANTE*
exports.deletedStudent = async(req,res,next)=>{
  try {
    const student = await Student.findByIdAndRemove({_id:req.params.id})
    if (!student) {
      res.json({mensaje:'Student not found'});
      next();
    }
    res.json({mensaje:'Student Deleted'})
  } catch (error) {
    res.send(error);
    next()
  }
}