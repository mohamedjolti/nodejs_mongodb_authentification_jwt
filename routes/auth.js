const router =require("express").Router();
const User=require("../models/User")


router.post("/register", (req,res)=>{
  
    const user={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    };
    console.log(user);
    User.create(user,(err,newUser)=>{
        if(err) console.log(err);
        else res.send(newUser);
    })

})

router.post("/login",(req,res)=>{
    res.send("loginn")
})


module.exports=router;