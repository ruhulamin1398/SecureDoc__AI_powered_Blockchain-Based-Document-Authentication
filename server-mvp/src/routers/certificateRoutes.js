const express = require("express");
const { ethers } = require("ethers");

const {
  AddCertificate
} = require("../controllers/certificateController");


const router = express.Router();

router.post("/add", AddCertificate); 

 

module.exports = router;