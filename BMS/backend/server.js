const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();
dotenv.config();

const app = express();



//app midleware
app.use(bodyParser.json());
app.use(cors());

//create database connection

const PORT = process.env.PORT || 8090 ;
const URL = process.env.DB_URL ;
mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})

const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connection success");
})

//Payment define
const PaymentRouter = require('./routes/Payment');
app.use('/Payment', PaymentRouter);

//Boat define
const BoatRouter = require('./routes/Boat');
app.use('/Boat', BoatRouter);

//Driver define
const driverRoutes = require('./routes/boatdrivers');
app.use("/boatdrivers" , driverRoutes);

//booking define
const bookingRoute = require('./routes/booking.route');
app.use('/bookings', bookingRoute);


const packageRoute = require('./routes/Package');
app.use('/package', packageRoute);

const OfferRouter = require('./routes/Offer.js');
app.use('/offer', OfferRouter);

//Feedback
const FeedbackRouter = require('./routes/FeedbackRoute');//import feedbackRoute
app.use('/FeedbackRoute', FeedbackRouter);

const StaffRouter = require('./routes/Staff.js');
 const UserRouter = require('./routes/User.js');
app.use('/Staff', StaffRouter);
app.use('/User', UserRouter);


//port
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});

