const mongoose = require('mongoose');
// import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    nic:{
        type: String,
        required: true,
        unique:true,
    },
    passportNo:{
        type: String,
        unique:true,
    
    },
    phoneNo:{
        type:String,
        required:true,
    },
    secPhoneNo:{
        type:String,
    },

    email:{
        type:String,
        required: true,
        unique: true,
    },

    password:{
        type:String,
        required:true,
    },

    repeatPassword:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
    }
}, {timestamps: true})


const User = mongoose.model("User", UserSchema);
module.exports = User;
// export default User;