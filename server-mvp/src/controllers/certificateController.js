 
const path = require('path');
const multer = require('multer');
const asyncHandler = require("express-async-handler");
const CertificateModel = require("../models/CertificateModel");



//@desc Create New Documnet
//@route POST /document/create
//@access private
const AddCertificate = asyncHandler(async (req, res) => {
  console.log("hi3")
 



  const certificate = await CertificateModel.findOne({ regId: 2016331520 });

  if (certificate) {
    const { regId, name, issueDate, degreeType ,degreeName,grade} = certificate;

    res.status(200).json({
      "msg": "success",
      "certificates": { regId, name, issueDate, degreeType,degreeName ,grade},
    });
 
   
  } else {
    res.status(404).json({
      "msg": "Certificate not found", 
    });
  }

 

});





//@desc get Certificate
//@route GET /certificates/{id}
//@access public
const getCertificate = asyncHandler(async (req, res) => {
  

const id = req.params.id;

  const certificate = await CertificateModel.findOne({ regId: id });

  if (certificate) {
    const { regId, name, issueDate, degreeType ,degreeName,grade,is_issued} = certificate;
     

    res.status(200).json({
      "msg": "success",
      "certificates": { regId, name, issueDate, degreeType,degreeName ,grade},
      is_issued
    });
 
   
  } else {
    res.status(404).json({
      "msg": "Certificate not found", 
    });
  }

 

});



const issueCertificate = asyncHandler(async (req, res)  => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'certificates/');
    },
    filename: (req, file, cb) => {
      const regId = req.body.regId;
      cb(null, regId + '.pdf');
    }
  });

  const upload = multer({ storage: storage }).single('pdfFile');

  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "File upload failed", error: err.message });
    }
    // Access additional data from the request
    const regId = req.body.regId;
    console.log("Registration ID: ", regId);
    
    try {
      const existingCertificate = await CertificateModel.findOne({ regId: regId });

      if (existingCertificate && existingCertificate.is_issued === 1) {
        return res.status(400).json({ message: "Certificate already issued" });
      }

      const updatedCertificate = await CertificateModel.findOneAndUpdate(
        { regId: regId }, 
        { $set: { is_issued: 1 } },
        { new: true } // Return the updated document
      );

      res.status(200).json({ message: "File uploaded successfully", regId: regId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
});




module.exports = {
  AddCertificate,issueCertificate,getCertificate

};
