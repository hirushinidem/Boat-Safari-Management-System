import React,{useState} from "react";
import axios from "axios";

import '../../CSS/styles.css'



function AddDrivers(){

  //fetch data

    const [Name , setName] = useState("");
    const [age , setAge] = useState("");
    const [NIC , setNIC] = useState("");
    const [mobile , setmobile] = useState("");
    const [BID , setBID] = useState("");
    const [error,setError] = useState(false)
    

    function sendData(e){
      e.preventDefault();

      //validations

      if(Name.length == 0 || age.length == 0 || NIC.length ==0 || mobile.length == 10 ){
        setError(true)
      }
      

      const newDriver = {
        Name ,
        age ,
        NIC,
        mobile,
        BID
      }

      //connect with backend

      axios.post("http://localhost:8090/boatdrivers/add",newDriver).then(()=>{

        alert("driver added");


      }).catch((err)=>{
        alert(err)
      })
        
    }

    return(
<div className="Addcontainer" >
<div className="containerForm">



<form style={{ marginLeft:'30%'}} className="form-group col-md-6 " onSubmit={sendData}>
  <div className="form-group">
    <h3 >Add Driver Details</h3>

  <div className="Lcolor">
    <label >Full Name</label>
    </div>
    <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" placeholder="name" onChange={(e)=>{
        setName(e.target.value);
    }}/>
    {error && Name.length <= 0?
    <small className="text-danger">Full name is required</small>: ""}

  </div>

  <div className="form-group">

  <div className="Lcolor">
    <label >Age</label>
    </div>
    <input type="number" className="form-control" id="age" placeholder="age" onChange={(e)=>{
        setAge(e.target.value);
    }}/>
    {error && age.length <= 0?
    <small className="text-danger">Age is required</small>: ""}
  </div>

  <div className="form-group">

  <div className="Lcolor">
    <label >NIC</label>
    </div>
    <input type="text" className="form-control" id="NIC" placeholder="XXXXXXXXXXXV"
    onChange={(e)=>{
        setNIC(e.target.value);
    }}/>
    {error && NIC.length <= 0?
    <small className="text-danger">NIC is required</small>: ""}
  </div>

  <div className="form-group">

  <div className="Lcolor">
    <label >Mobile number</label>
    </div>
    <input type="number" className="form-control" id="mobile" placeholder="+94XXXXXXXX"
    onChange={(e)=>{
      setmobile(e.target.value);
    }}/>
    {error && mobile.length <= 9?
    <small className="text-danger">Invalid Phone number </small>: ""}
  </div>

      <div className="form-group">
    <div className="Lcolor">
    <label >Boat Id</label>
    </div>
    <input type="text" className="form-control" id="BID" placeholder="BXXXX"
    onChange={(e)=>{
      setBID(e.target.value);
    }}/>
    </div>
    <button type="submit" className="addDriver">Add New Driver</button>
    
</form>
</div>
</div>
        

    )


}
export default AddDrivers