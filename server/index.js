    // 46:51
// express is just a prebuilt , just framework that will help us in creating server side
// webapplications 
console.log("hello");
// mongo supports both promises and callbacks
const express =require('express');
const PORT =3000;

//import 'package:express/express.dart';
// promises are basically like futures in data, 
const app =express();
// CREATING AN API
// http://<youripaddresss>/hello-world
app.get("/hello-world",(req,res)=>{
    res.json({hi:"hello world"});

});
// create a get request giving a json response with of name
// and value of YOUR NAME 
app.get("/RAVI-SB",(req,res)=>{
    res.json({name:"ravi"});

});

// GET, PUT, POST,DELETE, UPDATE, -->CRUD


app.listen(PORT,()=>{
    console.log(`connected at port ${PORT} hello`);
    
});
//local host
//192.11



// 1:09:32