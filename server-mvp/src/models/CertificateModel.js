 
const mongoose = require("mongoose");

const certificateSchema = mongoose.Schema(
  {
    
    regId: {
      type: String,
      required: [true, "Please add the Id"],
      index:true,
      unique:true
    },
    name: {
      type: String,
      required: [true, "Please add the  name"],
    },
    issueDate: {
      type: Date,
      default:new Date("2014-03-01T08:00:00Z"),
    },
    degreeType: {
      type: String,
      default : "Bechelor"
    },  
    degreeName: {
      type: String,
      default: "BSc in CSE"
    },  
    grade: {
      type: Number,
      default:3.50,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("certificate", certificateSchema);