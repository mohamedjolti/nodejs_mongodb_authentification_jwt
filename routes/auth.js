const router =require("express").Router();
const User=require("../models/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

router.post("/register",async (req,res)=>{

     //check if email exits
     const oldUser=await User.findOne({email:req.body.email});

     if(oldUser){
         console.log(oldUser);
         return res.send("email alredy exists")
     }    


     //hash password
     const salt=await bcrypt.genSalt(10);
     const hashPassword=await bcrypt.hash(req.body.password,salt)
  
    const user={
        name:req.body.name,
        email:req.body.email,
        password:hashPassword
    };
    console.log(user);
    User.create(user,(err,newUser)=>{
        if(err) console.log(err);
        else res.send(newUser);
    })

})

router.post("/login", async (req,res)=>{
              
    const user=await User.findOne({email:req.body.email});
      if(!user){
          res.send("Email not found!")
      }

      const passwod=await bcrypt.compare(req.body.password,user.password)

      if(!passwod){
          res.send("password not valid");
      }
      //create a token
      const token=jwt.sign({_id:user._id},"tokensecret")
      
      return res.header("auth-token",token).send(token)



})


module.exports=router;