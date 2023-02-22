import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import generatePDF from "../Offer/ReportGenaration";


function AllStaff(){
    const [staffmembers, setStaffmembers] = useState([]);
    // const history = useHistory();
    const navigate = useNavigate();
    const [search,setSearch]= useState("");

    const columnNames = [{name: "Name", nic: "NIC",designation:"Designation",mobileNo:"Mobile Number", jobType:"Job Type", basicSalary:"Basic Salary",
                        allowances: "Allowances", deductions:"Deductions", hourlyRate:"Hourly Rate", noOfHours: "No of Hours" }]

    //get all staff information
    useEffect(()=>{
        function getStaffmembers(){
            axios.get("http://localhost:8090/Staff/view")
            .then((res)=> {
                setStaffmembers(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                alert(err.message);
            })
        }
        getStaffmembers();
    }, [])

   
    //delete Staff member
    const deleteStaff =async(id) =>{
      
        let result = await fetch(`http://localhost:8090/Staff/delete/${id}`,{
          method : "Delete" 
        });
  
        result = await result.json();
        if(result){
          alert("Staff member deleted");
        }
  
      }

      const handleSalary = (staffmembers) => {
        // setMemberDets(staffmembers);
        // history.push(`salaryCalculation/${staffmembers._id}`)\
        console.log(staffmembers)
        navigate("/salaryCalculation",{state:{data:staffmembers}})
      }

    //function to generate report 
    // const pdfCustomer = (id) => {
    //     sessionStorage.editemp_id = id;
    //     window.location = `http://localhost:3000/customerpdf/?${id}`;
    //   }
    const pdfStaff = (id) => {
            sessionStorage.editemp_id = id;
            window.location = `http://localhost:8090/staffReport?id=${id}`;
          }

      
  //const[searchTerm, setSearchTerm] = useState("");
    
 //table table-bordered p-3 mb-2 bg-info text-white
    //display staff members in a table
    return (
        <div className="container">
            <h3>All staff members</h3>
              <div className="search-container">
                 <input type = 'search' placeholder="Search by name" onChange={(e)=>{setSearch(e.target.value)}}/> 
               </div>
          <br></br>
               
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">NIC</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Address</th>
                            <th scope="col">Job Type</th>
                            <th scope="col">Basic Salary</th>
                            <th scope="col">Allowances</th>
                            <th scope="col">Deductions</th>
                            <th scope="col">Hourly Rate</th>
                            <th scope="col">No of Hours</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Net Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                         staffmembers.filter((elem)=>{
                            if(search === ""){
                              return elem
                            }else if(elem.staffName.toLowerCase().includes(search.toLowerCase())){
                              return elem
              
                            }
                          }).map((staffmembers)=>(
                        <tr key={staffmembers._id} >
            
                            <td>{staffmembers.staffName}</td>
                            <td>{staffmembers.nic}</td>
                            <td>{staffmembers.designation}</td>
                            <td>{staffmembers.phoneNo}</td>
                            <td>{staffmembers.address}</td>
                            <td>{staffmembers.jobType}</td>
                            <td>{staffmembers.basicSalary}</td>
                            <td>{staffmembers.allowances}</td>
                            <td>{staffmembers.deductions}</td>
                            <td>{staffmembers.hourlyRate}</td>
                            <td>{staffmembers.noOfHours}</td>

                        {/* <td> {<button class="btn btn-primary" onClick={() => history.push(`/updateStaff/${staffmembers._id}`)}>Update</button>}</td> */}
                        <td> {<button class="btn btn-primary" onClick={() => navigate(`/updateStaff/${staffmembers._id}`)}>Update</button>}</td>  
                            
                            <td>{<button class="btn btn-danger" onClick={() => { deleteStaff(staffmembers._id); refreshPage() }}>Delete</button>}</td>

                            <td><button class="btn btn-dark" onClick={() => handleSalary(staffmembers)}>Net Salary</button></td>               
                          
                            {/* <td>{<button class="btn btn-dark"id="pdf" onClick={() => pdfStaff(staffmembers._id)}>Generate Report</button>} </td> */}
                           
                            </tr>            
                            )
                        )}
                </tbody>
            </table>

            <button class= "btn btn-dark" onClick={() => generatePDF(
          staffmembers.map(m => ({
            name: m.staffName,
            nic: m.nic,
            designation:m.designation,
            mobileNo: m.phoneNo,
            jobType:m.jobType,
            basicSalary:m.basicSalary,
            allowances: m.allowances,
            deductions: m.deductions,
            hourlyRate:m.hourlyRate,
            noOfHours: m.noOfHours
          }
          )), columnNames, false, "StaffReport")} >Generate Report</button>
        </div>
    )


    function refreshPage() {
        window.location.reload(false);
      }
   
}

export default AllStaff;