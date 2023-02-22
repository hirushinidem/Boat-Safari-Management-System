import React  , {useState , useEffect , useRef}from "react";
import axios from "axios";
import {Link, link} from 'react-router-dom';
import '../../CSS/styles.css';
import {useDownloadExcel} from "react-export-table-to-excel";




export default function AllDrivers(){

    const [Drivers , setDrivers] = useState([]);

    useEffect(()=>{
        function getDrivers(){
            axios.get("http://localhost:8090/boatdrivers/view").then((res)=>{
                console.log(res.data);
                setDrivers(res.data)
            }).catch((err)=>{
                alert(err.message);

            })
        }
        getDrivers();


    },[])

    const deleteDriver =async(id) =>{
      
      let result = await fetch(`http://localhost:8090/boatdrivers/delete/${id}`,{
        method : "Delete" 
      });

      result = await result.json();
      if(result){
        alert("Driver deleted");
      }

    }

    const updateDriver=(id)=>{
      sessionStorage.editdriver_id = id;
      alert(sessionStorage.editdriver_id);
     
      window.location = `http://localhost:3000/driver/update/?${id}`;
   }

    function refreshPage(){
      window.location.reload(false);
    }


    const driverTable = useRef(null)

    const{onDownload} = useDownloadExcel({
      currentTableRef : driverTable.current,
      fileName : "driver report",
      sheet : "drivers"
    });

    
    
    return(
      

      
      
        <div className="Addcontainer">
          
        <h3 >MANAGE DRIVER DETAILS</h3>


<table class="table table-bordered p-5  text-black " ref={driverTable} >
  
  <thead class="thead-dark">
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">NIC</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Boat id</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    Drivers.map((drivers)=>(
        <tr key={drivers._id} >
            
            <td>{drivers.Name}</td>
            <td>{drivers.age}</td>
            <td>{drivers.NIC}</td>
            <td>{drivers.mobile}</td>
            <td>{drivers.BID}</td>
            <td>{<button class="btn btn-danger" onClick={() => {deleteDriver(drivers._id) ; refreshPage()}}>delete</button>} 
            {<button id="update" class="btn btn-dark" onClick={() => updateDriver(drivers._id)}>update</button>}</td>
                     
            
        </tr>
    )

    )}
  </tbody>
</table>

<button className="addDriver" type="button" onClick={onDownload}>Download Drivers Report </button>

</div>

    )
}