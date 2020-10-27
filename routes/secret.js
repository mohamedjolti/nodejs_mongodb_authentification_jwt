const router =require("express").Router();
const virify=require("./virifyToken")
router.get("/profile",virify,(req,res)=>{
    return res.send("Welcome to your profile page")
})



module.exports=router;