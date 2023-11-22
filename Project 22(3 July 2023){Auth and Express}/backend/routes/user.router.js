const express=require('express')

const {signUp,logIn,getUser}=require('../Controllers/user.controller.js')
const {signupValidator}=require('../middleware/signupDataValidate.js')
const {loginValidator}=require('../middleware/loginDataValidate.js')
const {authenticateUser}=require('../middleware/authenticateUser.js')

const userRoute=express.Router();

userRoute.post('/signup',signupValidator,signUp)
userRoute.post('/login',loginValidator,logIn)
userRoute.get('/',authenticateUser,getUser)




module.exports=userRoute;