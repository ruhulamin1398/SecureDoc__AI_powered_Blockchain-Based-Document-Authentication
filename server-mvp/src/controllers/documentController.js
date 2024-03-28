const asyncHandler = require("express-async-handler");
const { walletPrivateKey } = require("../wallet/ruhul")
const { sha256 } = require('js-sha256');
const { ethers } = require("ethers");
const {contractAddress,contractABI}= require("../utils/constrants")

const network = "sepolia";


//@desc Create New Documnet
//@route POST /document/create
//@access private
const createDocument = asyncHandler(async (req, res) => {



  var obj = { "name": "Ruhul Amin", "reg": 2016331520, "CGPA": 3.61 }
  res.status(200).json({
    "msg": " done",
    "data": sha256(JSON.stringify(obj)),
    "data2": sha256(JSON.stringify(obj)),
    "data3": sha256(JSON.stringify(obj)),
    "data4": sha256("sdfsa"),
  });
});


//@desc Create New Documnet
//@route POST /document/create
//@access private
const Binformation = asyncHandler(async (req, res) => {

  // const provider = ethers.getDefaultProvider(network, {
  //   alchemy: "4WqOo77M6UMJKXT-Wy4kkzKmpLB-sxER",

  // });
 
  const provider = new AlchemyProvider("sepolia")
  console.log(provider)
  res.json({
    "h": "df"
  })
  console.log("pass")
  // const dContract = new ethers.Contract(contractAddress, contractABI, provider);
console.log("pass2")
  // const testV = await dContract.name();



  // const block = await provider.getBlockNumber()

  res.status(201).json({
    "msg": " done",
    "key": "testV", 
  });
});



module.exports = {
  createDocument,
  Binformation
};
