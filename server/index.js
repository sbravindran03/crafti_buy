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

app.listen(PORT,"0.0.0.0",()=>{
    console.log(`connected at port ${PORT}`);
    
});
//local host
//192.11


