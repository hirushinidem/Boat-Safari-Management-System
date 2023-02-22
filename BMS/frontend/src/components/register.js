//register - change usertype as admin in db to get admin
import React,{useState} from "react";
import axios from "axios";
import { useHistory, useNavigate } from "react-router-dom";


function Register(){
    const [name, setName] = useState("");
    const [nic, setNic] = useState("");
    const [passportNo, setPasportNo] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [secPhoneNo, setsecPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setrepeatPassword] = useState("");
     const[err,setErr]= useState(false)


    const intialState = {name, nic, passportNo, phoneNo, secPhoneNo, email, password, repeatPassword} 
    const[formData, setFormData] = useState(intialState);

    const navigate = useNavigate();

     function checkPassword(){
          if (password == null || repeatPassword == null){
               alert('Password fields are empty')
          }
          else if(password !== repeatPassword){
               alert('Passwords do not match');
          }     
          else{
               console.log('success password');
     }}

     function handlePassword(){
          if(phoneNo.length === 0 && secPhoneNo.length === 0){
               alert("Please provide a contact number")
          }
     }
     function handleIdentification(){
          if(nic.length === 0 && passportNo === 0){
               alert("Please provide your NIC or passport no")
          }
     }

     
     function sendData(e){ 
          const newUser={
               name,
               nic,
               passportNo,
               phoneNo,
               secPhoneNo,
               email,
               password,
               repeatPassword,
               // userType
             }
          
             axios.post("http://localhost:8090/User/register", newUser)
               .then(()=>{alert("Welcome!", navigate("/"));
          })
             .catch((err)=>{console.log(err)},
             console.log(newUser))

     }

    

    return(
        <form className="row g-3" onSubmit={()=>{sendData();handlePassword(); checkPassword(); handleIdentification()}}>
             <div className="container">
            <h3>Register</h3>

            <div className="form-group">
                 <label>Name</label>
                 <input type="text" className="form-control" placeholder="Enter name" required onChange={(e)=> setName(e.target.value)} pattern="[a-zA-Z\s]+"/><div class="valid-tooltip">
        Looks good!
      </div>
            </div>
            <div className="form-row">  
               <div className="form-group col-md-6">
                    <label>NIC</label>
                    <input type="text" className="form-control" placeholder="Enter NIC" onChange={(e)=> setNic(e.target.value)} maxLength={12}/>
               </div>
               <div className="form-group col-md-6">
                    <label>Passport No</label>
                    <input type="text" className="form-control" placeholder="Enter Passport No"  onChange={(e)=> setPasportNo(e.target.value)}/>
               </div>
            </div> 
            <div className="form-row">
            <div className="form-group col-md-6">
                 <label>Phone Number</label>
                 <input type="text" className="form-control" placeholder="Enter Phone Number" onChange={(e)=> setPhoneNo(e.target.value)} pattern="[0-9]+" maxLength={15}/>
                 {/* {phoneNo.length<=0? <div style={{color:'red'}}><small>Please provide a phone number</small></div>:""} */}
            </div>

            <div className="form-group col-md-6">
                 <label>Secondary Phone Number</label>
                 <input type="text" className="form-control" placeholder="Enter Secondary Phone Number"  onChange={(e)=> setsecPhoneNo(e.target.value)} pattern="[0-9]+"/>
            </div>
            </div>
           <div className="mb-3">
                 <label>Email</label>
                 <input type="email" className="form-control" placeholder="Enter Email"  onChange={(e)=> setEmail(e.target.value)}/>
                 {/* {email.length<=0? <div style={{color:'red'}}><small>Please provide a email address</small></div>:""} */}
            </div>

            
            <div className="form-row">
            <div className="form-group col-md-6">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" required onChange={(e)=> setPassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
                {/* {password.length<=0? <div style={{color:'red'}}><small>Please enter a password</small></div>:""} */}
             </div>

             <div className="form-group col-md-6">
                <label>Re-enter Password</label>
                <input type="password" className="form-control" placeholder="Re-enter password" onChange={(e)=> setrepeatPassword(e.target.value)} />
                {/* {repeatPassword.length<=0? <div style={{color:'red'}}><small>Please re-enter a password</small></div>:""} */}
             </div>
             </div>
             <button type="submit" className="btn btn-primary">Submit</button>
             </div>
        </form>
        );

}

export default Register;