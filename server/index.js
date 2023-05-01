    // 46:51
// express is just a prebuilt , just framework that will help us in creating server side
// webapplications 

// mongo supports both promises and callbacks
// IMPORTS FROM PACKAGES
const express =require("express");
const mongoose =require('mongoose');
// IMPORTS FROM OTHER FILES
const authRouter =require("./routes/auth");
// import 'package;flutter/screens/auth.dart'

// INIT
const app =express();
const PORT =3000;
const DB ='mongodb+srv://ravindran5211:LATHA.B@rak12.eyxde7v.mongodb.net/?retryWrites=true&w=majority'
// middleware
app.use(express.json());
app.use(authRouter);
// client->MIDDLEWARE ->SERVER -> CLIENT 
// connections 
mongoose
        .connect(DB)
        .then(()=>{
            console.log('Connection Successful ')
})
// 1:31:45
    .catch(e=>{
      console.log(e); 

})
//import 'package:express/express.dart';
// promises are basically like futures in data, 

// CREATING AN API
// http://<youripaddresss>/hello-world

// create a get request giving a json response with of name
// and value of YOUR NAME 


// GET, PUT, POST,DELETE, UPDATE, -->CRUD


app.listen(PORT,()=>{
    console.log(`connected at port ${PORT} hello`);
    
});
//local host
//192.11



// 1:09:32