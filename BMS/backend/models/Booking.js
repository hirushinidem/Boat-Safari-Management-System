const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookingSchema = new Schema({

  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },

  passenger: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }

},

  {
    collection: 'bookings'
  })

const Booking = mongoose.model("Booking" ,bookingSchema );
module.exports = Booking;