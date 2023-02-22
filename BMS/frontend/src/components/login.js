import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Login() {
    
    const[formData, setFormData] = useState({email:'', password:''});

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        // console.log(email,password)
        

        axios.post("http://localhost:8090/User/login", formData)
          .then((response)=>{localStorage.setItem('profile', JSON.stringify(response.data), navigate("/"), window.location.reload()) })
       
       .catch((err)=>{alert(err)})
    // alert(formData.password)
        
    }

    const handleChange = (e) => setFormData({...formData, [e.target.name] : e.target.value})
    
    return(
        <form className="login" onSubmit={handleSubmit}>
             <div className="container">
            <h3>Sign in</h3>

             <div className="mb-3">
                 <label>Email address</label>
                
                 <input name="email" type="email" className="form-control" placeholder="Enter email" required onChange= {handleChange} value={formData.email}/>
            </div>

            <div className="mb-3">
                <label>Password</label>
                <input name="password" type="password" className="form-control" placeholder="Enter password" required onChange= {handleChange} value ={formData.password}/>
             </div>

             <button type="submit" className="btn btn-primary" disabled={!validateForm()}>Submit</button>
             </div>
        </form>
        );

        function validateForm() {
            return formData.email.length > 0 && formData.password.length > 0;
        
          }

   
}
export default Login;