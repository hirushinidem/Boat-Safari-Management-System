//Model of offers collection


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OffersSchema = new Schema ({
    offerAmount:{
        type : Number,
        required: true
    },
    expireDate:{
        type: Date,
        required: true
    },
    Discription:{
        type: String,
        required: true
    
    },
    duration:{
        type: String,
        required: true
   
}

}
,{timestamps:true})

const Off = mongoose.model("Off" ,OffersSchema );
module.exports = Off;
