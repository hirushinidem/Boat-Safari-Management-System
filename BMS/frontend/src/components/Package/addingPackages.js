import React,{useState} from "react";
import axios from "axios";

//add
function AddPackages(){
  

    const [Capacity , setCapacity] = useState("");
    const [Type , setType] = useState("");
    const [Cost , setCost] = useState("");
    const [Time, setTime] = useState("");

    function sendData(e){
      e.preventDefault();

      const newPackage = {
        Capacity ,
        Type ,
        Cost,
        Time,
      }

      axios.post("http://localhost:8090/Package/add",newPackage).then(()=>{

        alert("package added");


      }).catch((err)=>{
        alert(err)
      })
        
    }

    return(

      <div className="container">
      
      <form onSubmit={sendData}>
        
        <div className="form-group">
      
          <label >Type</label>
          <input type="text" className="form-control" id="Local/Foreign" placeholder="Local/Foreign" onChange={(e)=>{
              setType(e.target.value);
          }}/>
        </div>
      
      <div className="form-group">
      
          <label>Capacity</label>
          <input type="text" className="form-control" id="Limit"  placeholder="Limit" onChange={(e)=>{
              setCapacity(e.target.value);
          }}/>
      
        </div>
      
        <div className="form-group">
      
          <label >Cost</label>
          

        <input type="text" className="form-control" id="Rs." placeholder="Rs."
          onChange={(e)=>{
              setCost(e.target.value);
          }}/>
        </div>
      
        <div className="form-group">
      
      <label >Time</label>
      <input type="text" className="form-control" id="00.00" placeholder="00.00"
      onChange={(e)=>{
          setTime(e.target.value);
      }}/>
    </div>
   
      
        <button type="submit" className="btn btn-primary">Add package</button>
      </form>
      </div>
              
      
          )
      

}
export default AddPackages