const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        requied:[true,"Name is Required"],
        trim:true,
        maxLength:[30,"Name must be Less than 30 chars"]
    },
    email:{
        type:String,
        requied:true
    },
    password:{
        type:String,
        requied:true
    }
})

module.exports=mongoose.model('User',userSchema)