const express=require('express')
const app=express()
const dotenv=require('dotenv')
dotenv.config()

const moongoose=require('./config/database')
const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})