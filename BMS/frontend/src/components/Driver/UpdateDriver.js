import React  , {useState , useEffect}from "react";
import axios from "axios";



export default function DriverUpdate(props){

    const [Name , setName] = useState("");
    const [age , setAge] = useState("");
    const [NIC , setNIC] = useState("");
    const [mobile , setmobile] = useState("");
    const [BID , setBID] = useState("");

      function sendData(e){
      e.preventDefault();
      alert("Successfuly updated");


       
     let Name = document.getElementById('Name').value;
     let age = document.getElementById('age').value;
     let NIC = document.getElementById('NIC').value;
     let mobile = document.getElementById('mobile').value;
     let BID = document.getElementById('BID').value;
     
     
    
     const editDriver={

        Name:Name,
        age :age,
        NIC : NIC,
        mobile :mobile,
        BID : BID

     }

     axios.put(`http://localhost:8090/boatdrivers/update/${sessionStorage.editdriver_id}`,editDriver).then(()=>{
        alert("Driver Updated")

        let editdriver_id=sessionStorage.editdriver_id;
        console.log(editdriver_id);
      window.location.reload(false);//refresh the value field


     }).catch((err) =>{
        alert(err)
     })
}

useEffect(() =>{
    const id = props.id;
    let editdriver_id=sessionStorage.editdriver_id;
    axios.get(`http://localhost:8090/boatdrivers/get/${editdriver_id}`).then((res) => {
        console.log(res);
        let data=res.data.drivers
        document.getElementById('Name').value=data.Name;
        document.getElementById('age').value=data.age;  
        document.getElementById('NIC').value=data.NIC;
        document.getElementById('mobile').value=data.mobile;
        document.getElementById('BID').value=data.BID;
       })
       
       
    }, []);

    
   
    return(

        
        <div className="Addcontainer" >
        <div className="containerForm">

        
        
        <form style={{ marginLeft:'30%'}} className="form-group col-md-6 " onSubmit={sendData}>
          <div className="form-group">
          <h3 >Update Driver Details</h3>
          <div className="Lcolor">
            <label >Full Name</label>
            </div>
            <input type="text" className="form-control" id="Name" aria-describedby="emailHelp" placeholder="name" onChange={(e)=>{
                setName(e.target.value);
            }}/>
           
        
          </div>
        
          <div className="form-group">
        
          <div className="Lcolor">
            <label >Age</label>
            </div>
            <input type="number" className="form-control" id="age" placeholder="age" onChange={(e)=>{
                setAge(e.target.value);
            }}/>
           
          </div>
        
          <div className="form-group">
        
          <div className="Lcolor">
            <label >NIC</label>
            </div>
            <input type="text" className="form-control" id="NIC" placeholder="Enter nic"
            onChange={(e) => {

              setNIC(e.target.value);  
            }} />
           
          </div>
        
          <div className="form-group">
        
          <div className="Lcolor">
            <label >Mobile number</label>
            </div>
            <input type="number" className="form-control" id="mobile" placeholder="+94XXXXXXXX"
            onChange={(e)=>{
              setmobile(e.target.value);
            }}/>
            
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
            <a href = "http://localhost:3000/view" >
            <button  type="submit"className="addDriver">Update Driver</button>
            </a>
            
        </form>
        </div>
        </div>
    )
}

