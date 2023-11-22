const User=require('../models/usermodel.js')

exports.registerUser=async (req,res)=>{
   try {
       const {name,email,passowrd}=await req.body;
       const user=await User.create({
        name,
        email,
        passowrd
       })
       console.log(user);

       res.status(200).json({
        success:true,
        message:"User Created succesfully",
        user
       })
   } catch (error) {
      console.log(error);
      res.status(400).json({
        success:false,
        message:error.message
      })
   }
}

exports.loginUser=async (req,res)=>{
    try {
        const {email,passowrd}=await req.body;
        const userData=await User.findOne({email})

        if(userData){
            if(userData.passowrd==passowrd){
                res.status(200).json({
                    success:true,
                    message:"User Passowrd Matced Successfully"
                })
            }
            else{
                res.status(400).json({
                    success:false,
                    message:"User Password Does not matched"
                })
            }
        }
        else
        {
            res.status(400).json({
                success:false,
                message:"User Does Not Exitsted"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
    

}

exports.getUser=async (req,res)=>{
    try {
        const users=await User.find({})
        res.status(200).json({
            success:true,
            users
        })
   } catch (error) {
      console.log(error);
      res.status(400).json({
        success:false,
        message:error.message
      })
   }

}