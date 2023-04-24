const express =require("express");
const authRouter =express.Router();
authRouter.post('/api/signup',(req,res)=>{
    const{name,email,password}= req.body;
    // {
        // 'name:name,'email':email, 'password':password
    // } 1:26
    // 
    // get the data from the client 
    // post that data in database to the user

});
module.exports=authRouter;