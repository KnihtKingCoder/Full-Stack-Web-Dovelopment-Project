const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const bcrypt = require("bcryptjs")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    bio:{
        type:String,
        required:true
    }
})

userSchema.methods={
    jwttokens(){
        return jwt.sign(
            {id:this._id,username:this.username},
            process.env.SECRET,
            { expiresIn:'24d'}
            )
    }
}

userSchema.pre("save",async function (next){
    if(!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password, 12); //hashing password
    return next();
})


const UserModel=mongoose.model("InfoUser",userSchema)

module.exports=UserModel