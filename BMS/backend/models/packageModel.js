//Package collection


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageSchema = new Schema ({
    Type:{
        type : String,
        required: true
    },
    Capacity:{
        type: Number,
        required: true
    },
    Cost:{
        type: Number,
        required: true
    },
    Time:{
        type:String,
        required:true
    },
},{timestamps:true})

const Pack = mongoose.model("Pack" ,PackageSchema );
module.exports = Pack;