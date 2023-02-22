import React  , {useState , useEffect}from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


export default function UpdateOffer(){

  const [offerAmount, setofferAmount] = useState("");
  const [expireDate,setexpireDate] = useState("");
  const [Discription,setDiscription] = useState("");
  const [duration,setduration] = useState("");
  const [id,setID] = useState();

  const location = useLocation();
  const navigate = useNavigate();


  const validate = async(e) =>{
    e.preventDefault();

    const updateData = {
      id,
      offerAmount,
      Discription,
      duration,
      expireDate
      
    }

    await axios.put("http://localhost:8090/offer/update",updateData).then((res) =>{
      alert(res.data.state)
      navigate(-1)
    }).catch(err =>{

      alert("error")
    })

  }

useEffect(() =>{


  const data = location.state.props;

  console.log(data);

  setofferAmount(data.offerAmount)
  setDiscription(data.Discription)
  setduration(data.duration)
  setexpireDate(data.expireDate)
  setID(data._id);

   }, []);
   
    return(
      // pattern="[a-zA-Z]{1,100}"


      // UPDATE FORM-----------------------------------------------------------------------------------------------------------

  <html> 
    <body> 
    <div  class = "background-image">
    <h1 class="bb"> Update Offer </h1>
    <br></br>
   <br></br>
    <div class="kk">
   
    <table width="95%" style={{border: '10px solid rgba(0, 234, 255)'} }>
    
    <div className="container">
    <center>
    
      <form  onSubmit={validate}>

        <div className="form-group" class="hh">
          <label  for="offerAmount">offerAmount </label>
          <input type="text" className="form-control" id="offerAmount"  placeholder="Capacity" value = {offerAmount}
            onChange={(e) => {

              setofferAmount(e.target.value);  //assigng values to name

            }} />
            </div>
       
            
        <div className="form-group" class="hh">
          <label for="expireDate">ExpireDate</label>
          <input type="text" className="form-control" id="expireDate" placeholder="enter the expire date" value = {expireDate}
            onChange={(e) => {

              setexpireDate(e.target.value);  
            }} />
            </div>

            <div className="form-group" class="hh">
          <label for="Discription">Description</label>
          <input type="text"className="form-control"  id="Discription" placeholder="Enter Description" value = {Discription}
            onChange={(e) => {

              setDiscription(e.target.value);  

            }} />
            </div>

            
            <div className="form-group" class="hh">
          <label for="duration">Duration</label>
          <input type="text" className="form-control" id="duration"  placeholder="Enter duration" value = {duration}
            onChange={(e) => {

              setduration(e.target.value);  

            }} />
            </div>

            
            <div className="form-group" class="hh">
            <input id= "btn" type="submit" value="Update"/>
        </div>
      
          
</form>

       </center>
            </div>
            </table>

            </div>
            </div>
            
            </body>  
  </html>  
    )
}

