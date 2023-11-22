require('dotenv').config()
const express=require('express')
const connectToDB=require('./config/db.js')
const cors=require('cors')


const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

connectToDB()

const userRoutes=require('./routes/userRoute.js')

app.use('/',userRoutes)

module.exports=app

