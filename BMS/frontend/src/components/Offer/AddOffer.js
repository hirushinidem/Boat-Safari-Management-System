import React,{useState} from "react";
import axios from "axios";

// adding Offer function
export default function AddOffer(){

    const [offerAmount, setofferAmount] = useState("");
    const [expireDate,setexpireDate] = useState("");
    const [Discription,setDiscription] = useState("");
    const [duration,setduration] = useState("");

    function sendData(e){
        e.preventDefault();

        const newOffer = {

          offerAmount,
          expireDate,
          Discription,
          duration

        }


        axios.post("http://localhost:8090/offer/add",newOffer).then(()=>{
            alert("Offer Added")
        }).catch((err)=>{
            alert(err)
        })

    }

    return(

      
// form to get data
<html>
<body >
  <div class = "background-image" >
  <h1 class="bb"> Add
   Offer </h1>
  <br></br>
  <br></br>
<div class= "ss">
        <div className="container" style={{border: '10px solid rgba(0,212, 250)'}}>
        
        <form onSubmit={sendData}>

  <div class="form-group">
    <label for="offerAmount">OfferAmount</label>
    <input type="Number" className="form-control" id="offerAmount" placeholder="Enter the offerAmount" required
    onChange={(e)=>{
        setofferAmount(e.target.value);
    }}/>
  </div>

  <div className="form-group">
    <label for="expireDate">ExpireDate</label>
    <input type="date" className="form-control" id="expireDate" placeholder="Enter the offer expireDate" required
    onChange={(e)=>{
        setexpireDate(e.target.value);
    
    }}/>
  </div>

  <div className="form-group">
    <label for="Discription">Description</label>
    <input type="text" className="form-control" id="Discription" placeholder="Enter the Offer Discription" 
     onChange={(e)=>{
        setDiscription(e.target.value);
    }}/>
  </div>

  <div className="form-group">
    <label for="duration">Duration</label>
    <input type="text" className="form-control" id="duration" placeholder="Enter the Offer duration" required
     onChange={(e)=>{
        setduration(e.target.value);
    }}/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>    
</div>
</div>
</div>
</body>
</html>
       

    )


}