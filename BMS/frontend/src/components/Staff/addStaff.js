import React, {useState} from "react";
import axios from "axios";

function AddStaff(){

    const [staffName, setstaffName] = useState("");
    const [nic, setNic] = useState("");
    const [designation, setDesignation] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setaddress] = useState("");
    const [jobType, setjobType] = useState("");
    const [basicSalary,setbasicSalary] = useState(0);
    const [allowances, setallowances] = useState(0);
    const [deductions, setdeductions] = useState(0);
    const [hourlyRate, sethourlyRate] = useState(0);
    const [noOfHours, setnoOfHours] = useState(0);

    //sending the data
    function sendData(e){
        e.preventDefault();
       const newStaff={ staffName,nic,designation, phoneNo,address,jobType,basicSalary,allowances,deductions, hourlyRate,noOfHours }

       
       axios.post("http://localhost:8090/Staff/add", newStaff)
       .then(()=>{alert("Staff member added");  })
       .catch((err)=>{alert(err)})
    }

    
    
    
    return (
        <div className="container">
            <form onSubmit={sendData} >
              <div className="form-group">
                 <label for="name">Full name</label>
                 <input type="text" className="form-control" id="name" placeholder="Enter name"  onChange={(e)=> setstaffName(e.target.value) } pattern="[a-zA-Z\s]+" required/>
              </div>

              <div className="form-group">
                 <label for="nic">NIC</label>
                 <input type="text" className="form-control" id="nic" placeholder="Enter NIC" onChange={(e)=> setNic(e.target.value)}  maxLength={12} required/>
             </div>

             <div className="form-group">
                 <label for="designation">Designation</label>
                 <input type="text" className="form-control" id="designation" placeholder="Enter designation" onChange={(e)=> setDesignation(e.target.value)} pattern="[a-zA-Z\s]+"required/>
             </div>

             <div className="form-group">
                 <label for="phoneNo">Phone Number</label>{/* accept only numbers   onChange={(phoneNo.length < 10) && ((e)=> setPhoneNo(e.target.value))}  value={phoneNo}*/}
                 <input type="text" className="form-control" id="phoneNo" placeholder="Enter Phone Number" onChange={ ((e)=> setPhoneNo(e.target.value))} maxLength={10}required/>
             </div>

             <div className="form-group">
                 <label for="address">Address</label>
                 <input type="text" className="form-control" id="address" placeholder="Enter address"onChange={(e)=> setaddress(e.target.value)}required/>
             </div>

             <div className="form-group">
                 <label for="jobType">Job Type</label>
                 <div className="form-group">
                 <input type="radio" id="jobType" name="jobType" value="Full-time" onChange={(e)=> setjobType(e.target.value)}/>&nbsp;
                 <label for="full-time"> Full-time</label>&nbsp;&nbsp; 
                <input type="radio" id="jobType" name="jobType" value="Part-time"onChange={(e)=> setjobType(e.target.value)}/>&nbsp;
                <label for="part-time">Part-time</label>
                </div>
            </div>
        {((jobType === 'Full-time') && (
                <>
             <div className="form-group">
                 <label for="basicSalary">Basic Salary</label>
                 <input type="number" className="form-control" id="basicSalary" placeholder="Enter Basic Salary"onChange={(e)=> setbasicSalary(e.target.value)} pattern="[0-9]+"/>
             </div>  

             <div className="form-group">
                 <label for="allowances">Allowance</label>
                 <input type="number" className="form-control" id="allowances" placeholder="Enter Allowance"onChange={(e)=> setallowances(e.target.value)} pattern="[0-9]+"/>
             </div>

             <div className="form-group">
                 <label for="deductions">Deductions</label>
                 <input type="number" className="form-control" id="deductions" placeholder="Enter Deductions"onChange={(e)=> setdeductions(e.target.value)} pattern="[0-9]+"/>
             </div>
             </>
            )
            )}

 {(jobType === "Part-time") && (
            <>
             <div className="form-group">
                 <label for="hourlyRate">Hourly Rate</label>
                 <input type="number" className="form-control" id="hourlyRate" placeholder="Enter Hourly Rate"onChange={(e)=> sethourlyRate(e.target.value)} pattern="[0-9]+"/>
             </div>

             <div className="form-group">
                 <label for="noOfHours">No of Hours</label>
                 <input type="number" className="form-control" id="noOfHours" placeholder="Enter No of Hours"onChange={(e)=> setnoOfHours(e.target.value)} pattern="[0-9]+"/>
             </div> 
             </> 
 )} 
            <button type="submit" className="btn btn-primary">Submit</button>


            </form>
        </div>
  
    )
}

export default AddStaff;