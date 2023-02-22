const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
   

    Name : {
        type : String,
        required: true
    },
    email :{
        type: String ,
        required:true
    },
    Description:{
        type:String,
        required:true
    }

},{timestamps:true})
const Feedback = mongoose.model("Feedback" ,feedbackSchema );
module.exports = Feedback;
