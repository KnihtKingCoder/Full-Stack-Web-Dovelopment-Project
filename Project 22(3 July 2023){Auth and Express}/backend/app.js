require('dotenv').config()
const express=require('express')
const userRoute=require('./routes/user.router.js')
const dbConnect=require('./config/db.js')
const cors=require('cors')
const cookieParser = require("cookie-parser")



const app=express()
dbConnect()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cors({
    origin:"http://localhost:5500",
    credentials:true
}))
app.use(cookieParser())

app.use('/',userRoute)

app.get('/',(req,res)=>{
    res.send("hello what's up guy's ")
})

module.exports=app