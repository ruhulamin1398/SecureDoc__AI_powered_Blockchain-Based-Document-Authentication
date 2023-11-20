const mongoose = require("mongoose");
let uniqueValidator = require('mongoose-unique-validator');
const UpoladSchema= mongoose.Schema({
  
    name:{
        type: "string",
        require: "true"
        
    },
    username:{
        type: "string",
        require: "true"
    },
    CourseStart:{
        type: "string",
        require: "true"
    },
    CourseEnd:{
        type: "string",
        require: "true"
    },
    CourseName:{
        type: "string",
        require: "true"
    },
    img:{
       type: 'Buffer',
       require: "true",
       unique: "true",

    },
    date:{
        type: "string",
        require: "true"
    }
});
UpoladSchema.plugin(uniqueValidator);
module.exports=UpoladSchema;