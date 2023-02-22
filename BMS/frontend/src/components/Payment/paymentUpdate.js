import React  , {useState , useEffect}from "react";
import axios from "axios";



export default function PaymentUpdate(props){

    const [Booking, setBooking] = useState("");
    const [Amount, setAmount] = useState(0);
    const [Discount, setDiscount] = useState(0);
    const [Method, setMethod] = useState("");

      function sendData(e){
      e.preventDefault();
      // alert("Successfuly updated");


       
     let Booking = document.getElementById('Booking').value;
     let Amount = document.getElementById('Amount').value;
     let Discount = document.getElementById('Discount').value;
     let Paid = Amount - Discount;
     let Method = document.getElementById('Method').value;
     
    
    
      
     
    
     const editPay={

        Booking:Booking,
        Amount:Amount,
        Discount:Discount,
        Paid:Paid,
        Method:Method,

     }

     axios.put(`http://localhost:8090/Payment/update/${sessionStorage.editpay_id}`,editPay).then(()=>{
        alert("Payment Updated")

        let editpay_id=sessionStorage.editpay_id;
        console.log(editpay_id);
      window.location.reload(false);//refresh the value field


     }).catch((err) =>{
        alert(err)
     })
}

useEffect(() =>{
    const id = props.id;
    let editpay_id=sessionStorage.editpay_id;
    axios.get(`http://localhost:8090/Payment/get/${editpay_id}`).then((res) => {
        console.log(res);
        let data=res.data.payment;
        document.getElementById('Booking').value=data.Booking;
        document.getElementById('Amount').value=data.Amount;  
        document.getElementById('Discount').value=data.Discount;
        document.getElementById('Method').value=data.Method;
        
       })
       
       
    }, []);

    
   
    return(

      <div class = "pay">
        <div className="Addcontainer" >
        <div>
          <div className="topic">
          <h3 >UPDATE PAYMENT DETAILS</h3>
          </div>
        
        
        <form style={{ marginLeft:'30%'}} className="form-group col-md-6 " onSubmit={sendData}>
          <div className="form-group">
        
          <div className="Lcolor">
            <label >Booking ID</label>
            </div>
            <input type="text" className="form-control" id="Booking" placeholder="Booking ID" onChange={(e)=>{
                setBooking(e.target.value);
            }}/>
           
        
          </div>
        
          <div className="form-group">
        
          <div className="Lcolor">
            <label >Amount</label>
            </div>
            <input type="number" className="form-control" id="Amount" placeholder="Amount" onChange={(e)=>{
                setAmount(e.target.value);
            }}/>
           
          </div>
        
          <div className="form-group">
        
          <div className="Lcolor">
            <label >Discount</label>
            </div>
            <input type="number" className="form-control" id="Discount" placeholder="Discount"
            onChange={(e) => {

              setDiscount(e.target.value);  
            }} />
           
          </div>
          <div className="form-group">
        
          <div className="Lcolor">
            <label >Discount</label>
            </div>
            <input type="text" className="form-control" id="Method" placeholder="Cash"
            onChange={(e) => {

              setMethod(e.target.value);  
            }} disabled/>
           
          </div>
          
          
          
            
            <button type="submit" className="btn p-3 mb-2 bg-warning text-dark">Update Payment</button>
            
        </form>
        </div>
        </div>
        </div>
    )
}

