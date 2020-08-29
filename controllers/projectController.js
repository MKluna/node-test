const Project = require('../models/Project');


/*NUEVO PROYECTO*/
exports.newProject=async(req,res,next)=>{
    const project = new Project(req.body);
    try {
        if(project){
            await project.save()
            res.status(200).send({message:"Succesfull Create"})
        }else{
            res.status(404).send({message:"The project could not be saved"})
        }
    } catch (error) {
        res.status(500).send({message:"Save Error,document"})
        next()
    }
}

/*MOSTRAR TODOS LOS PROYECTOS */
exports.showProjects=async(req,res,next)=>{
try {
    const project = await Project.find({});
    res.json(project);
} catch (error) {
    res.send(error);
    next();
}
}

/*MOSTRAR POR ID */
exports.showProjectById=async(req,res,next)=>{
    const project = Project.findById(req.params.id);
    try {
        if(!project){
            res.json({message:'Project not found'});
            next();
        }
        res.json(project);
    } catch (error) {
        res.send(error);
        next();
    }
}

/*EDITAR PROYECTO */
exports.updateProject=async()=>{
    try {
        const project = Project.findOneAndUpdate({id:req.params.id},req.body,{new:true})
        res.json(project);
    } catch (error) {
        res.send(error);
        next();
    }
}

/*ELIMINAR PROYECTO */
exports.deletedProject=async(req,res,next)=>{
    try {
        const project = Project.findByIdAndRemove({_id:req.params.id})
        if(!project){
            res.json({message:'Project not found'});
            next();
        }
        res.json({message:'Project Deleted'});
    } catch (error) {
        res.send(error);
        next();
    }
}