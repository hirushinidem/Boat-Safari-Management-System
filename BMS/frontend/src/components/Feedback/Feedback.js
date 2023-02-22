import React,{useState} from "react";
import axios from "axios";

function Feedback(){

    const [Name , setName] = useState("");
    const [email, setemail] = useState("");
    const [Description , setDescription] = useState("");

    function sendData(e){
        e.preventDefault();
  
        const newFeedback = {
            Name,
            email,
            Description,

        }
        axios.post('http://localhost:8090/FeedbackRoute/addfeedback',newFeedback).then(()=>{

        alert("Feedback added");
    }).catch((err)=>{
        alert(err)
      })
        
    }

    return(
        
        

        <div className="feedback" class="p-3 mb-2 bg-secondary text-info">

<form onSubmit={sendData}>
  <div className="form-group">
<h1>Feedback</h1>
    <label>Name</label>
    <input type="text" className="form-control" id="name"  placeholder="name" onChange={(e)=>{
        setName(e.target.value);
    }}/>

  </div>

  <div className="form-group">

<label >Email</label>
<input type="email" className="form-control" id="email" placeholder="Email" onChange={(e)=>{
    setemail(e.target.value);
}}/>
</div>

<div className="form-group">

<label >Description</label>
<textarea id="descritption" rows="4" className="form-control"  placeholder="Descritpion"
onChange={(e)=>{
    setDescription(e.target.value);
}}/>
</div>


<button id="button" type="submit" className="btn btn-primary">submit</button>
</form>
</div>

        
        
    )
}


export default Feedback