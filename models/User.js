const mongoose =require("mongoose");

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6
    },
    email:{
        type:String,
        required:true,
        min:6
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:1024
    },
    date:{
        type:Date,
        default:Date.now
    }


})



module.exports=new mongoose.model("User",UserSchema);