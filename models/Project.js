const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,
    }, 
    category: {
        type: String,
        require: true,
        trim: true,
    },
    year: {
        type: Number,
        require: true,
        trim: true,
    },
    langs: {
        type: String,
        require: true,
        trim: true,
    }
    
},{ timestamps: { createdAt: true, updatedAt: true } });

module.exports = mongoose.model("Project",ProjectSchema)