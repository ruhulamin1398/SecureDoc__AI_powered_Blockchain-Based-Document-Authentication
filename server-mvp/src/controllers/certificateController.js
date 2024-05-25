const asyncHandler = require("express-async-handler");
const CertificateModel = require("../models/CertificateModel");



//@desc Create New Documnet
//@route POST /document/create
//@access private
const AddCertificate = asyncHandler(async (req, res) => {




  // const newCert = await CertificateModel.create(
  //   {
  //     "regId": "2016331520",
  //     "name": "Ruhul Amin",
  //     "issueDate": "2016-07-15T08:00:00Z",
  //     "degreeType": "Bachelor",
  //     "degreeName": "BSc in CSE",
  //     "grade": 3.61
  //   }
  // );


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




module.exports = {
  AddCertificate,

};
