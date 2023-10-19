const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ObjectId = require('mongodb').ObjectID;
const bcrypt = require("bcrypt");
const userSchema = require("../Scheema/UserScheema");

const User= new mongoose.model("User", userSchema);
const jwt = require("jsonwebtoken");

const CheakLoginControler = require('../MiddleWears/CheakLoginControler')
const saltRounds = 10;

router.post("/user",async(req,res)=>{

    const hashpassword =  await bcrypt.hash(req.body.password_1, saltRounds);
 
    try {
     
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
         

            password: hashpassword,
        });
        await newUser.save();
        res.status(200).json({
            message: "Signup was successful!",
        });
    } catch(error) {
        console.log(error)
            res.status(200).json({
                message: "username and email should be uniqe",
            });
        }
})

router.post("/login",async(req,res)=>{
   try {
      const user = await User.find({ username: req.body.username });
      if (user&&user.length>0) {
            const isvalidPassword=  await bcrypt.compare(req.body.password_1, user[0].password);
           
            if(isvalidPassword) {
                // generate token

                const token = jwt.sign({
                    username: user[0].username,
                   
                    userId: user[0]._id,
                }, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                });

                res.status(200).json({
                    "access_token": token,
                    "message": "Login successful!"
                });
            } else {
                res.status(200).json({
                    "error": "Wrong Username and password"
                });
            }
        } else {
            res.status(200).json({
                "error": "Wrong Username and password"
            });
      }
   } catch (error) {
    res.status(200).json({
        "error": "Wrong Username and password"
    });
   }  
})
router.put("/UpdateUserProfile/:id", async (req, res) => {
    const result =  User.findByIdAndUpdate(
      {_id: ObjectId(req.params.id)},
      {
        $set: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            mobile: req.body.mobie,
            address: req.body.address
        },
      },
      {
        new: true,
        useFindAndModify: false,
      },
      (err) => {
        if (err) {
          res.status(500).json({
            error: "There was a server side error!",
          });
        } else {
          res.status(200).json({
            message: "Todo was updated successfully!",
          });
        }
      }
    );
   
  });

  router.get("/Profile",CheakLoginControler,async(req,res)=>{
    try {  
        const user = await User.find({ username: req.query.username  });
        if(user&&user.length>0){
            res.send(user)
        }
        
    } catch (error) {
        res.status(200).json({
            "error": "Wrong Username and password"
        }); 
    }
  
     
 })
 router.get("/Alluserprofile",async(req,res)=>{
    try {  
        const user = await User.find({ });
        if(user&&user.length>0){
            res.send(user)
        }
        
    } catch (error) {
        res.status(200).json({
            "error": "Wrong Username and password"
        }); 
    }
  
     
 })


module.exports = router;