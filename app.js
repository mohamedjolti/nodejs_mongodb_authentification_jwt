const express =require("express");

const app=express();

const mongoose=require("mongoose");
var bodyParser=require("body-parser");

app.use(bodyParser.json());

//routers

const AuthRoutes=require("./routes/auth");

const SecretRoutes=require("./routes/secret");
mongoose.connect("mongodb://localhost:27017/Tasks",{useNewUrlParser:true});


app.get("/",(req,res)=>{
    res.send("Hi ");
})



app.use("/api/user",AuthRoutes);
app.use("/api/secret",SecretRoutes);

app.listen(3000,()=>{
    console.log("Server is working")
})