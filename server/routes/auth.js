const express =require("express");
const authRouter =express.Router();
authRouter.post('/api/signup',(req,res)=>{
    const{name,email,password}= req.body;

    // {
        // 'name:name,'email':email, 'password':password
    // } 1:26
    //  weak-password -6 charcters ,same -account -with  email

    // get the data from the client 
    // post that data in database to the user

});
module.exports=authRouter;
// 1:42:39