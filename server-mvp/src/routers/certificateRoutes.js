const express = require("express");
const { ethers } = require("ethers");

const router = express.Router();
 

const {
  AddCertificate,issueCertificate,getCertificate
} = require("../controllers/certificateController");

 

 

router.get("/:id", getCertificate); 
router.post("/issue", issueCertificate); 
router.post("/add", AddCertificate); 

 

module.exports = router;