//  1 require mongoose
//  2 create user schema    structure
//  3 create user model        contain two  argument one is collection name the other is schema structure name
//  export model for futher use

const mongoose =require('mongoose')

const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,

        required:true
    },
    userPassword:{
        type:String,
        required:true
    }
})

const user= mongoose.model('user',userSchema)

module.exports=user
