import React,{useState} from "react";
import axios from "axios";

export default function MakePayment(){

    const [Booking, setBooking] = useState("");
    const [Amount, setAmount] = useState(0);
    const [Discount, setDiscount] = useState(0);
    const [Method, setMethod] = useState("");

    function refreshPage(){
      window.location.reload()
     }

    function sendData(e){
      e.preventDefault();
      
      let Paid = Amount - Discount;

     if(Paid<1){
      alert ("Error : Discount larger than or equal to Amount");
    }
    else{
    const newPayment = {
      Booking,
      Amount,
      Method,
      Discount,
      Paid
    }

    
    axios.post("http://localhost:8090/Payment/add", newPayment).then(() => {
      alert("Payment added")
      refreshPage()
    }).catch((err) =>{
      alert(err)
    })
  }
    
  }
    
    return(
    <div class = "pay">
    <div className="container">
    
    <br/><br/>
    <form onSubmit={sendData} id="payForm">
        
        <div className="form-group">
          <label for="Booking">Booking ID</label>
          <input type="text" className="form-control" id="Booking" placeholder="Enter BookingID"
          onChange={(e) =>{
            setBooking(e.target.value);
          }} 
          />
           
        </div>
        <div className="form-group">
          <label for="Amount">Amount</label>
          <input type="number" className="form-control" id="Amount" placeholder="Enter Amount" 
          onChange={(e) =>{
            setAmount(e.target.value);
          }}/>
        </div>
        <div className="form-group">
          <label for="Discount">Discount</label>
          <input type="number" className="form-control" id= "Discount" placeholder="Enter Discount" 
          onChange={(e) =>{
            setDiscount(e.target.value);
          }}/>
        </div>
        <div className="form-group">
          <label for="Method">Payment Method</label>
          <input type="text" className="form-control" id="Method" placeholder="Enter Payment Method"
          onChange={(e) =>{
            setMethod(e.target.value);
          }}/> 
        </div>
        
        
        {/*<div className="form-group">
          <label for="Payable">Payable</label>
          <input type="number" className="form-control" id= "Payable" placeholder="Enter Payable" 
          onChange={(e) =>{
            setPayable(e.target.value);
          }}/>
        </div>*/}
        <button type="submit" className="btn btn-primary" >Submit</button>
        
    </form>
    </div>
    </div>
    
    )
     
}