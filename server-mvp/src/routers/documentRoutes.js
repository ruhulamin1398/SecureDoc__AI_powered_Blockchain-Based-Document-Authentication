const express = require("express");
const { ethers } = require("ethers");

const {
  createDocument,
  Binformation
} = require("../controllers/documentController");


const router = express.Router();

router.post("/add", createDocument);
router.post("/test", Binformation);

 

module.exports = router;