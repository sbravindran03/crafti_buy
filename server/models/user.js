const mongoose =require('mongoose');
const userSchema =mongoose.Schema({
    name:{
        required :true,
        type:String,
        trim:true,

    },
    email:{
        required:true,
        type:String,
        trim:true,
        validate:{
            validator:(value)=>{

                const re=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                value.match(re);
                    return value.match(re);
            },
            message:"please enter a valid email address",

        },
    
    },
    password:{
        required: true,
        type:String,
    },
    address:{
        type:String,
        default:'',
    },
    type:{
        type:String, 
        default:'user,'
    }
});
const  User =moongoose.model('User',userSchema);
module.exports =User;