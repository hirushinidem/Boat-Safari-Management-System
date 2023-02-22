import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate, useLocation } from 'react-router-dom';
import generatePDF from "../Offer/ReportGenaration";

function SalaryCalculation() {
    const [staffName, setName] = useState("")
    const[nic, setNic] = useState("");
    const [jobType, setjobType] = useState("");
    const [basicSalary,setbasicSalary] = useState(0);
    const [allowances, setallowances] = useState(0);
    const [deductions, setdeductions] = useState(0);
    const [hourlyRate, sethourlyRate] = useState(0);
    const [noOfHours, setnoOfHours] = useState(0);
    const location = useLocation();
    const [netSalary, setNetSalary] = useState(0);

    const [staffMember, setStaffMember] = useState(location.state.data);
    const [staffmembers, setStaffmembers] = useState([]);
    const [search,setSearch]= useState("");
    let {id} = useParams();

    const columnNames = [{name: "Name", nic : "NIC", jobType:"Job Type", basicSalary:"Basic Salary", allowances: "Allowances", 
                          deductions:"Deductions", hourlyRate:"Hourly Rate", noOfHours: "No of Hours", netSalary: "NET SALARY" }]

    useEffect(() =>{
      let salary;
      if(staffMember.staffName === '') return;
      else{
        // axios.get(`http://localhost:8090/Staff/view/member?id=${id}`)
        // setStaffMember(staffName, nic, jobType, basicSalary, allowances, deductions, hourlyRate, noOfHours);

        if (staffMember?.jobType === "Full-time"){
          salary = (staffMember?.basicSalary + staffMember?.allowances) - staffMember?.deductions;
        }
        else{
          salary = (staffMember?.noOfHours) * (staffMember?.hourlyRate);
        }
      }  
      setNetSalary(salary);
    }, [staffMember])

  //   useEffect(()=>{
  //     function getStaffmembers(){
  //         axios.get("http://localhost:8090/Staff/view/")
  //         .then((res)=> {
  //             setStaffmembers(res.data);
  //             console.log(res.data);
  //         })
  //         .catch((err) => {
  //             alert(err.message);
  //         })
  //     }
  //     getStaffmembers();
  // }, [])


    return(
       <div className="container">
             
              <h1 style={{color:'#007bff'}}>Net Salary:<span style={{color:'#333'}}> Rs.{netSalary}</span></h1>
              {/* <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">NIC</th>
                            <th scope="col">Job Type</th>
                            <th scope="col">Basic Salary</th>
                            <th scope="col">Allowances</th>
                            <th scope="col">Deductions</th>
                            <th scope="col">Hourly Rate</th>
                            <th scope="col">No of Hours</th>
                           <th scope="col">No of Hours</th>
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
    
                            <td>{staffmembers.jobType}</td>
                            <td>{staffmembers.basicSalary}</td>
                            <td>{staffmembers.allowances}</td>
                            <td>{staffmembers.deductions}</td>
                            <td>{staffmembers.hourlyRate}</td>
                            <td>{staffmembers.noOfHours}</td>

                            </tr>))}
                            </tbody>
                            </table>

                            <button class= "btn btn-dark" onClick={() => generatePDF(
          staffmembers.map(m => ({
            name: m.staffName,
            nic: m.nic,
            jobType:m.jobType,
            basicSalary:m.basicSalary,
            allowances: m.allowances,
            deductions: m.deductions,
            hourlyRate:m.hourlyRate,
            noOfHours: m.noOfHours,
            netSalary:m.netSalary
          }
          )), columnNames, false, "SalaryReport")} >Generate Report</button>
               */}
               </div>

    )

  }
  
  export default SalaryCalculation;
  