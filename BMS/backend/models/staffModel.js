const mongoose = require('mongoose');
// import mongoose from 'mongoose';

const StaffSchema = new mongoose.Schema({
    staffName:{
        type:String,
        required: true,
    },
    nic:{
        type:String,
        unique: true,
        required:true,
    },
    designation:{
        type:String,
        required:true,
    },
    phoneNo: {
        type:String,
        required:true,
    },
    address: {
        type:String,
        required:true,
    },
    jobType:{ 
        type:String, 
        required:true,
    },
    basicSalary:{
        type:Number,
    },
    allowances:{
        type:Number,
    },
    deductions:{
        type:Number,
    },
    hourlyRate:{
        type:Number,
    },
    noOfHours:{
        type:Number,
    },
    
}, {timestamps: true})


const Staff = mongoose.model("Staff", StaffSchema);
module.exports = Staff;
// export default Staff;
