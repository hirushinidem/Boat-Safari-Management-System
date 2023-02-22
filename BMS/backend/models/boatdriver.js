const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema ({
    Name :{
        type : String,
        required: true
    },
    age :{
        type : Number,
        required: true
    },
    NIC :{
        type : String,
        required: true
    },

    mobile :{
        type : Number,
        required: true
    },

    BID :{
        type : String,
        required: true
    },

})

const Driver = mongoose.model("Driver" ,driverSchema );
module.exports = Driver;