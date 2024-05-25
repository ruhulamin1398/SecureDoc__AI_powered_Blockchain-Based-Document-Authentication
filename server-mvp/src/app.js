require("dotenv").config();
const express = require('express');
const app = express();
require("./db/conn");

const path = require('path');
const errorHandler = require("./middleware/v1/errorHandler");


// const listEndpoints = require('express-list-endpoints');


 
const AsyncHandler = require("express-async-handler"); 



// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));


const certificateRoutes = require("./routers/certificateRoutes")
const uploadDirectory = path.join(__dirname, 'certificates');
 

 


app.get('/hi', AsyncHandler(async(req,res)=>{
  // Update all existing documents to include the new fields
 await User.updateMany({}, { $set: { is_verified: false, verification_code: 0 } });
 res.json({ "msg" : "done"})

}));
 

  
 


app.use('/certificates', certificateRoutes);


// console.log(listEndpoints(app));



app.use(errorHandler);
const PORT  = process.env.PORT || 5010;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
