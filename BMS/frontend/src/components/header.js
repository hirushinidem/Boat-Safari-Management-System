import React, { useState} from "react";
import {Link} from 'react-router-dom';

export default function Header(){
  const  [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))


  const logout = () => {
    setUser(null);
    localStorage.clear()
    // localStorage.removeItem(user)
    window.location.reload();
    alert("Logging out...")
  }

   return(
   
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Boat Management</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="boatDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Boats
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/boat/">View Boats</a>
            <a class="dropdown-item" href="/boat/add">Add Boat</a>
          </div>        
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="boatDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Drivers
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/driver/">View Drivers</a>
            <a class="dropdown-item" href="/driver/add">Hire Driver</a>
          </div>        
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="boatDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Packages
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/package/">Available Packages</a>
            <a class="dropdown-item" href="/package/view">View Packages</a>
            <a class="dropdown-item" href="/package/add">Add packages</a>
          </div>        
        </li> 

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="boatDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Offers
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/offer/">View Offers</a>
            <a class="dropdown-item" href="/offer/add">Add Offers</a>
          </div>        
        </li>  

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="boatDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Bookings
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/booking-list">View Bookings</a>
            <a class="dropdown-item" href="/create-booking">Make Booking</a>
          </div>        
        </li> 

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="paymentDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Payment
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/payment/">List Payments</a>
            <a class="dropdown-item" href="/payment/add">Record Payment</a>
          </div>        
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="feedbackDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Feedback
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/feedback/addfeedback">Add Feedback</a>
            <a class="dropdown-item" href="/feedback/Display">View Feedback</a>
          </div>        
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="feedbackDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Staff
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/staff/view">Modify/View Staff Members</a>
            <a class="dropdown-item" href="/staff/addStaff">Add Staff Members</a>
          </div>        
        </li>

        {!user ? (
        <>
        <li  className="nav-item">
      <Link to = "user/login" className="nav-link">Login</Link>
      </li>
      <li  className="nav-item">
      <Link to = "/register" className="nav-link">Register</Link>
      </li>
        </>
        
      ) : (
      <li  className="nav-item">
        <button onClick={logout} className="btn btn-light">Logout</button>
      </li>
      )}

      <li  className="nav-item">
      {/* <p>{user?.name}</p> */}
      <button onClick={user?.name} className="btn btn-outline-primary">{user?.name}</button>
      </li>
       

      </ul>
      
  </div>
</nav>
   )
}
