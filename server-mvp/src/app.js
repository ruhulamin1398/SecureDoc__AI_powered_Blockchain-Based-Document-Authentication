require("dotenv").config();
const express = require('express');
const app = express();
require("./db/conn")
const errorHandler = require("./middleware/v1/errorHandler");


// const listEndpoints = require('express-list-endpoints');




const userRoute = require("./routers/v1/userRoutes");
const contactRoutes = require("./routers/v1/contactRoutes"); 
const AsyncHandler = require("express-async-handler");
const User = require("./models/userModel");
const VerificationCode  = require("./models/verificationCodeModel");


const documentRoutes = require("./routers/documentRoutes"); 


// Middleware to parse JSON in the request body
app.use(express.json());

app.get('/hi', AsyncHandler(async(req,res)=>{
  // Update all existing documents to include the new fields
 await User.updateMany({}, { $set: { is_verified: false, verification_code: 0 } });
 res.json({ "msg" : "done"})

}));
// for no production only , please remove before deploy
// app.get('/clean-data', AsyncHandler(async(req,res)=>{
  
  
//   await User.deleteMany({});
//   await VerificationCode.deleteMany({})
   
//  res.json({ "msg" : "All data was deleted " })

// }));

app.get('/users', AsyncHandler(async(req,res)=>{

  const users = await User.find({});
  
 res.json({ users})

}));

  

// Use the user routecontra
app.use('/api/v1/users', userRoute);

app.use('/api/v1/contacts', contactRoutes);


app.use('/documents', documentRoutes);


// console.log(listEndpoints(app));



app.use(errorHandler);
const PORT  = process.env.PORT || 5010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
