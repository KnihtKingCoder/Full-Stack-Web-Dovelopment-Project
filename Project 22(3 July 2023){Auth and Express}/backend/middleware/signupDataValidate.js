exports.signupValidator=async (req,res,next)=>{
    const {name,username,email,password,bio}=await req.body;
    if(req.body && name && email && password && bio && username){
        next()
    }else{
        res.status(404).send({msg:"all Input Fields are required"})
    }
}