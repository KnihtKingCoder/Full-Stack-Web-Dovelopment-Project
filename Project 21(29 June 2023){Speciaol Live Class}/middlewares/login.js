exports.login= (req,res,next)=>{
    const {email,password}=req.body;

    if(req.body && email && password){
        next()
    }
    else
    {
        res.status(400).json({
            success:false,
            message:"All filed of input are required"
        })
    }
}