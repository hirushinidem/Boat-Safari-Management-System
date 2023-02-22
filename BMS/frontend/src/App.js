
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { useState } from 'react';


import Header from './components/header';
//payment
import MakePayment from './components/Payment/Makepayment';
import MyPayment from './components/Payment/listPayment';
import PaymentUpdate from './components/Payment/paymentUpdate';
// Boat
import AddBoat from "./components/Boat/AddBoat";
import ViewBoat from "./components/Boat/ViewBoat";
import BoatUpdate from "./components/Boat/BoatUpdate";
//driver
import AddDrivers from './components/Driver/addingDrivers';
import AllDrivers from './components/Driver/allDrivers';
import DriverUpdate from './components/Driver/UpdateDriver';
//booking
import BookingPDF from "./components/Booking/bookingPDF";
import CreateBooking from "./components/Booking/create-booking.component";
import EditBooking from "./components/Booking/edit-booking.component";
import BookingList from "./components/Booking/booking-list.component";
//package
import ViewPackage from './components/Package/viewPackage';
import AddPackages from './components/Package/addingPackages';
import AllPackages from './components/Package/allPackages';
import UpdatePackage from './components/Package/UpdatePackage';
import Local from './components/Package/local';
import Foreign from './components/Package/foreign';

import AddOffer from "./components/Offer/AddOffer";
import ViewOffer from "./components/Offer/ViewOffer";
import Update from "./components/Offer/UpdateOffer";
// import './CSS/ViewOffer.css';
// import './CSS/AddOffer.css';

import ViewFeedback from './components/Feedback/ViewFeedback'
import Feedback from './components/Feedback/Feedback';

import AddStaff from './components/Staff/addStaff';
import AllStaff from './components/Staff/allStaff'
import UpdateStaff from './components/Staff/updateStaff';
import Login from './components/login'
import Register from './components/register';
import SalaryCalculation from './components/Staff/salaryCalculation';

//import './Header.css';
import './CSS/AddBoat.css';
import './CSS/BoatUpdate.css';
import './CSS/ViewBoat.css';
import './CSS/listPayment.css'
import './CSS/styles.css'
import './CSS/search.css'

function App() {

  const  [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [memberDets, setMemberDets] = useState();
  return (
    <Router>
      <div>
        
        <Header/>
        <Routes>
           {/* payment */}
          <Route path='/payment/' exact element={<MyPayment/>} />
          <Route path='/payment/add' exact element={<MakePayment/>} />
          <Route path='/payment/update' exact element={<PaymentUpdate/>} />
           {/* boat */}
          <Route path="/boat/add" exact element={<AddBoat/>} />
          <Route path="/boat/" exact element={<ViewBoat/>} />
          <Route path="/boat/update" exact element={<BoatUpdate/>} />
          {/* driver */}
          <Route path="/driver/add" exact element={<AddDrivers/>} />
          <Route path="/driver/" exact element={<AllDrivers/>} />
          <Route path="/driver/update" exact element={<DriverUpdate/>} />
          {/* booking */}
          <Route path="/create-booking" exact element={<CreateBooking/>} />
          <Route path="/edit-booking/:id" exact element={<EditBooking/>} />
          <Route path="/booking-list" exact element={<BookingList/>} />
          <Route path="/bookingPDF" exact element={<BookingPDF/>} />

          {/* package */}
          <Route path='/package/view' exact element = {<ViewPackage/>} />
          <Route path="/package/add" exact element={<AddPackages/>} />
          <Route path="/package/" exact element={< AllPackages/>} />
          <Route path="/package/update" exact element={<UpdatePackage/>} /> 
          <Route path='/local' exact element={<Local/>} />
          <Route path='/foreign' exact element={<Foreign/>} />

          {/* offers */}
          <Route path="/offer/add" exact element={<AddOffer/>} />
            <Route path="/offer/" exact element={<ViewOffer/>} />
            <Route path="/offer/update" exact element={<Update/>} />

            <Route path="/feedback/addfeedback" exact element={<Feedback/>} />
            <Route path="/feedback/Display" exact element={<ViewFeedback/>} />
            
            <Route path="/staff/view" element={(user?.userType === "Admin" )  ? <AllStaff /> : <Login />} />
            <Route path="/staff/addStaff" element={(user?.userType === "Admin") ? <AddStaff /> : <Login />} />
            <Route path='/updateStaff/:id' exact element={<UpdateStaff/>} /> 
            <Route path='/salaryCalculation' element={ <SalaryCalculation />}/>

           <Route path='/user/login' exact element={<Login />} /> 
          
            <Route path='/register' exact element={<Register/>} /> 
        </Routes>
      </div>
    </Router>
  );
}
export default App;
