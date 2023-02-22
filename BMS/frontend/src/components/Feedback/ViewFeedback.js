import React , {useState, useEffect} from "react";
import axios from "axios";

export default function ViewFeedback(){

    const[Feedback,setfeedback] = useState([]);

    useEffect(()=>{
        function getFeedback(){
            axios.get("http://localhost:8070/FeedbackRoute/Display/").then((res)=>{
                console.log(res.data);
                setfeedback(res.data)
        }). catch((err)=>{
            alert(err.massage);
        })
            }
            getFeedback();
        },[])
    
        return(
            <div className="feedbackView">
   <h3>Customer Feedback</h3>
           <table class="table table-bordered p-3 mb-2 bg-info text-white">
            
            
                <thead>
               <tr>
                 
                 <th scope="col">Name</th>
                 <th scope="col">email</th>
                 <th scope="col">Description</th>
                 
               
                 
               </tr>
             </thead>
            
             <tbody>
             {
              Feedback.map((Feedback)=>(
                   <tr key={Feedback._id} >
                       
                       <td>{Feedback.Name}</td>
                       <td>{Feedback.email}</td>
                       <td>{Feedback.Description}</td>
                       
                       
                   </tr>
           
               )
   
       
               )}
             </tbody>
           </table>
           
           
                   </div>
               )
           
          function refreshPage(){
           window.location.reload(false);
          }
   }