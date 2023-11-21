const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
mongoose.connect(process.env.Base_URL).then(
  console.log("connected to Database") ).catch((error)=>{
    console.log(error)
  })

module.exports=mongoose