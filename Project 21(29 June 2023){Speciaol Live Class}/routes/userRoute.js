const express=require('express')

const {getUser,registerUser,loginUser}=require('../controllers/userController.js')

const router=express.Router();

router.get('/getUser',getUser)
router.post('/register',registerUser)
router.post('/login',loginUser)


module.exports=router