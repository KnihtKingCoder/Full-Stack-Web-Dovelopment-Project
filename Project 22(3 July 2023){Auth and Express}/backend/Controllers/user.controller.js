const express=require('express')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt = require("bcryptjs")
const UserModel=require('../models/user.model.js')

//Signup page
exports.signUp=async (req,res)=>{
   try {
    
   const {name,username,email,password,bio}=await req.body;

   //check are field 
   if(!name || !username || !email || !password || !bio){
    throw new error("All filds are required")
   }

   //Check user already exit or not

   const userExit=await UserModel.findOne({email});
   if(userExit){
    throw new error("User already exit")
   }
  

   const user=await UserModel.create({
    name,
    username,
    email,
    password,
    bio
   })
   console.log(user);
    res.status(200).json({
        success:true,
        message:"new User register Successfully"
    })
   } catch (error) {
    res.status(404).json({
        success:false,
        message:error.message
    })
   }
}



//Login Page
exports.logIn=async (req,res)=>{
   try {
    const {username,password}=await req.body;
    const getUserData=await UserModel.findOne({username}).select("+password")
    if(getUserData && getUserData.username){
        const result=await bcrypt.compare(password,getUserData.password)
        if(result){
            const token=await getUserData.jwttokens();
            const cookieOption={
                maxAge:24 * 60 * 60 * 1000,
                httpOnly: true
            }
            res.cookie("token", token, cookieOption);
                  res.status(200).json({
                    success: true,
                    data: getUserData
                  });
        }
        else{

            res.status(404).json({
                msg:"Password is Incorrect, Try Again!",
                error:result,
                password:password,
                dbpassword:getUserData.password
            })
    }

    }
    else{  
        res.status(404).send({msg:"No Account Found Associated with this username"})
   }
}

    catch (error) {
        res.status(501).send({msg:error.message})
   } 
    
}


//Getting User Page 
exports.getUser=async (req,res)=>{
    const {username} = req.user;

    try{
        const userData = await UserModel.findOne({username});
        res.status(200).send({
            msg:"Success",
            data:userData
        })

    }
    catch(err){
        res.status(501).send({msg:err.message})
    }
}


