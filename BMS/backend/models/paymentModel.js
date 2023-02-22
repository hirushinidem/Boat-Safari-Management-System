//Model of payment collection


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create payment object
const PaymentSchema = new Schema ({
    Booking:{
        type: String,
        required: true
    },
    Amount:{
        type : Number,
        required: true
    },
    Discount:{
        type : Number,
        required: true
    },
    Paid:{
        type : Number,
        required: true
    },
    Method:{
        type: String,
        required: true
    }
},{timestamps:true})

const Payment = mongoose.model("payments" ,PaymentSchema );
module.exports = Payment;