import React  , {useState , useEffect}from "react";
import axios from "axios";



export default function UpdatePackage(props){

    
    const [Type,setType] = useState("");
    const [Capacity, setCapacity] = useState("");
    const [Cost,setCost] = useState("");
    const [Time,setTime] = useState("");

    function sendData(e){
      e.preventDefault();
      //alert("Successfuly inserted");

       
     
     let Type = document.getElementById('Type').value;
     let Capacity = document.getElementById('Capacity').value;
     let Cost = document.getElementById('Cost').value;
     let Time = document.getElementById('Time').value;
     
     const editpackage={

        
        Type:Type, 
        Capacity:Capacity,
        Cost:Cost,
        Time:Time,
             }

     axios.put(`http://localhost:8090/Package/update/${sessionStorage.editpackage_id}`,editpackage).then(()=>{
        alert("Package added")

        let editpackage_id=sessionStorage.editpackage_id;
        console.log(editpackage_id);
      window.location.reload(false);//refresh the value field


     }).catch((err) =>{
        alert(err)
     })
}

useEffect(() =>{
    const id = props.id;
    let editpackage_id=sessionStorage.editpackage_id;
    axios.get(`http://localhost:8090/Package/get/${editpackage_id}`).then((res) => {
        console.log(res);
        let data=res.data.packages;
        
        document.getElementById('Type').value=data.Type;  
        document.getElementById('Capacity').value=data.Capacity;
        document.getElementById('Cost').value=data.Cost;
        document.getElementById('Time').value=data.Time;    
       
      })
    }, []);
   
    return(

        
    <div className="container">
      <div>
<h3>Update Package Details</h3>

      </div>
    
      <form onSubmit={sendData}>

      <div className="form-group">
          <label for="Type">Type</label>
          <input type="text" className="form-control" id="Type"  placeholder="Enter Type"
            onChange={(e) => {

              setType(e.target.value);  

            }} />
            </div>


        <div className="form-group">
          <label for="Capacity">Capacity</label>
          <input type="text" className="form-control" id="Capacity"  placeholder="Capacity" 
            onChange={(e) => {

              setCapacity(e.target.value);  //assigng values to Capacity

            }} />
            </div>
       
            
        <div className="form-group">
          <label for="Cost">Cost</label>
          <input type="text" className="form-control" id="Cost" placeholder="Enter Cost"
            onChange={(e) => {

              setCost(e.target.value);  
            }} />
            </div>

            <div className="form-group">
          <label for="Time">Time</label>
          <input type="text"className="form-control"  id="Time" placeholder="Enter Time"
            onChange={(e) => {

              setTime(e.target.value);  

            }} />
            </div>

            
           

           
            
            <div className="form-group">
        <input type="submit" value="Update"/>
        </div>
      
          
</form>
       
            </div>
    )
}

