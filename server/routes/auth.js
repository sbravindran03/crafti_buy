const express =require("express");
const authRouter =require("../models/user");
const authRouter =require("../models/seller");
const authRouter =express.Router();
authRouter.post('/api/signup',async (req,res)=>{
    const{name,email,password}= req.body;
    const existingUser =await User.findone({email});
    const existingSeller = await seller.findone({email});

    // {
        // 'name:name,'email':email, 'password':password
    // } 1:26
    //  weak-password -6 charcters ,same -account -with  email

    // get the data from the client 
    // post that data in database to the user

});
module.exports=authRouter;
// 1:42:39
