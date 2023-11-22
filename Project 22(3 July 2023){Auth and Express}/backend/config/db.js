const mongoose=require('mongoose')

const DB_URL=process.env.DB_URL

const dbConnect=async ()=>{
    mongoose.connect(DB_URL)
    .then((conn)=>{
        console.log(`Database Connected Succesfully in ${conn.connection.host}`);
    })
    .catch((error)=>{
        console.log(error.message);
    })
}


module.exports=dbConnect