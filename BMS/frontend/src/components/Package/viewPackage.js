import React  , {useState , useEffect, useRef}from "react";
//import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDownloadExcel} from "react-export-table-to-excel";
//view ,delete
export default function ViewPackage(){

    const [Packages , setPackages] = useState([]);
    const Navigate=useNavigate()
    useEffect(()=>{
        function getPackages(){
            axios.get("http://localhost:8090/Package/view").then((res)=>{
                console.log(res.data);
                setPackages(res.data)
            }).catch((err)=>{
                alert(err.message);

            })
        }
        getPackages();


    },[])

    // const updatePackage=(id)=>{
    //   sessionStorage.editPackage_id = id;
    // window.location = `http://localhost:8090/Package/update/${id}`;
    // }
    const deletePackage =async(id) =>{
      
      let result = await fetch(`http://localhost:8090/Package/delete/${id}`,{
        method : "Delete" 
      });

      result = await result.json();
      if(result){
        alert("Package deleted");
      }

    }

    const Update=(packageId)=>{
      console.log("error")
       Navigate('Update',{ state: { id: packageId } }
       
       )
      
  
    }
    
    const packageTabel = useRef(null)

    const { onDownload } = useDownloadExcel({
    currentTableRef: packageTabel.current,
    filename: "package report",
    sheet: "package"
     });

const UpdatePackage=(id)=>{
  sessionStorage.editpackage_id=id;
 
  window.location =`http://localhost:3000/update/?${id}`;
}
    
    return(
      
        <div className="container">
 
 <center><h2>Package Details</h2></center>
<table class="table table-bordered p-3 mb-2 bg-info text-white" id="MainTable" ref={packageTabel}>
  <thead>
    <tr>
      
      <th scope="col">Type</th>
      <th scope="col">Capacity</th>
      <th scope="col">Cost</th>
      <th scope="col">Time</th>
      <th scope="col">Activity</th>
     
      
    </tr>
  </thead>
  <tbody>
  {
    Packages.map((Package)=>(
        <tr key={Package._id} >
            
            <td>{Package.Type}</td>
            <td>{Package.Capacity}</td>
            <td>{Package.Cost}</td>
            <td>{Package.Time}</td>
            
            <td>{<button class="btn btn-danger" onClick={() => deletePackage(Package._id)}>Remove</button>} 
            {<button class="btn btn-dark" onClick={() =>UpdatePackage(Package._id)}>Update</button>}</td>
        </tr>

    )

    )}
  </tbody>
</table>

<br></br>
<button type="button" onClick={onDownload} className="btn btn-primary float-right m-3">Download report</button>

        </div>
        

    )
}
