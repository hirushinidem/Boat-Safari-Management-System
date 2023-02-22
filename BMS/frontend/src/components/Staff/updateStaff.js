import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory, useNavigate } from 'react-router-dom';
import axios from 'axios';


const UpdateStaff = () =>{
    let {id} = useParams();
    const navigate = useNavigate();
    
    console.log(id);
    console.log(useParams());
   
    const [staffMember, setStaffMember] = useState({staffName:'', nic:'', designation: '', phoneNo: '', address: '', jobType: '',
                                                    basicSalary: 0, allowances: 0, deductions: 0, hourlyRate: 0, noOfHours: 0 });
    const [updated, setUpdated] = useState(false)

   useEffect(() =>{
    if(!updated){
        console.log(id);
        axios.get(`http://localhost:8090/Staff/view/member?id=${id}`)
   .then((res)=> {
       setStaffMember(res.data);
       console.log('success');
       console.log(res.data);
   })
   
   .catch((err) => {
       alert(err.message);
   })
}
   }, [])

   useEffect(() =>{
    if(updated) {
    // history.push('/allStaff')
    navigate('/staff/view')
    }
   }, [updated])
   

   const updateStaff = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8090/Staff/view/member/${staffMember._id}`, staffMember)
    .then((res)=> {
        console.log('success');
        console.log(res.data);
        setUpdated(true)
    })
   }

   //update form
    return (
        <div className="container">
            <form onSubmit={(e)=>updateStaff(e)}>
                <h3>Update Staff</h3>
              <div className="form-group">
                 <label for="name">Full Name</label>
                 <input type="text" className="form-control" id="name" placeholder="Enter name" value={staffMember?.staffName} onChange={(e) => setStaffMember({...staffMember, staffName: e.target.value})}/>
              </div>

              <div className="form-group">
                 <label for="nic">NIC</label>
                 <input type="text" className="form-control" id="nic" placeholder="Enter NIC"  value={staffMember?.nic} onChange={(e) => setStaffMember({...staffMember, nic: e.target.value})}/>
             </div>

             <div className="form-group">
                 <label for="designation">Designation</label>
                 <input type="text" className="form-control" id="designation" placeholder="Enter designation"  value={staffMember?.designation} onChange={(e) => setStaffMember({...staffMember, designation: e.target.value})}/>
             </div>

             <div className="form-group">
                 <label for="phoneNo">Phone Number</label>
                 <input type="text" className="form-control" id="phoneNo" placeholder="Enter Phone Number"  value={staffMember?.phoneNo} onChange={(e) => setStaffMember({...staffMember, phoneNo: e.target.value})}/>
             </div>

             <div className="form-group">
                 <label for="address">Address</label>
                 <input type="text" className="form-control" id="address" placeholder="Enter address"  value={staffMember?.address} onChange={(e) => setStaffMember({...staffMember, address: e.target.value})}/>
             </div>

             <div className="form-group">
                 <label for="jobType">Job Type</label>
                 <div className="form-group">
                 <input type="radio" id="full-time" name="jobType" value="Full-time" checked = {staffMember?.jobType ==='Full-time' ? true : false} onClick={(e) => setStaffMember({...staffMember, jobType: e.target.value})}/>&nbsp;
                 <label for="full-time"> Full-time</label>&nbsp;&nbsp; 
                <input type="radio" id="part-time" name="jobType" value="Part-time" checked = {staffMember?.jobType ==='Part-time' ? true : false} onClick={(e) => setStaffMember({...staffMember, jobType: e.target.value})}/>&nbsp;
                <label for="part-time"> Part-time</label>
                </div>
            </div>
            {/* <p>{staffMember?.jobType}</p> */}
             {((staffMember?.jobType === 'Full-time') && (
                <>
             <div className="form-group">
                 <label for="basicSalary">Basic Salary</label>
                 <input type="number" className="form-control" id="basicSalary" placeholder="Enter Basic Salary"  value={staffMember?.basicSalary} onChange={(e) => setStaffMember({...staffMember, basicSalary: e.target.value})}/>
             </div>  

             <div className="form-group">
                 <label for="allowances">Allowance</label>
                 <input type="number" className="form-control" id="allowances" placeholder="Enter Allowance"  value={staffMember?.allowances} onChange={(e) => setStaffMember({...staffMember, allowances: e.target.value})}/>
             </div>

             <div className="form-group">
                 <label for="deductions">Deductions</label>
                 <input type="number" className="form-control" id="deductions" placeholder="Enter Deductions"  value={staffMember?.deductions} onChange={(e) => setStaffMember({...staffMember, deductions: e.target.value})}/>
             </div>
             </>
              )
              )}
            {(staffMember?.jobType === "Part-time") && (  
                <>
             <div className="form-group">
                 <label for="hourlyRate">Hourly Rate</label>
                 <input type="number" className="form-control" id="hourlyRate" placeholder="Enter Hourly Rate"  value={staffMember?.hourlyRate} onChange={(e) => setStaffMember({...staffMember, hourlyRate: e.target.value})}/>
             </div>

             <div className="form-group">
                 <label for="noOfHours">No of Hours</label>
                 <input type="number" className="form-control" id="noOfHours" placeholder="Enter No of Hours"  value={staffMember?.noOfHours} onChange={(e) => setStaffMember({...staffMember, noOfHours: e.target.value})}/>
             </div> 
             </> 
 )} 
            <button type="submit" className="btn btn-primary" >Update</button>
            </form>
        </div>
    )

}

export default UpdateStaff;