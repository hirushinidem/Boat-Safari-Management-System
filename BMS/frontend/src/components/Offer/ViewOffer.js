import axios from "axios";
import React,{ useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import generatePDF from "./ReportGenaration";
import { useDownloadExcel } from "react-export-table-to-excel"




// function to view offer details

function View(){

    const [offer, setOffers] = useState([]);
    const [search,setSearch]= useState("");
    const navigate=useNavigate()

    const columnNames = [{offer: "Offer Amount",expirationDate : "Expiration Date",Description:"Description",Duration:"Duration"}]

 
  useEffect(() => {
    function getOffers() {
      axios
        .get("http://localhost:8090/offer/")
        .then((res) => {
          setOffers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getOffers();
  }, []);

  const updateDetails = (e) =>{
    console.log(e);
    navigate("/offer/update",{state:{props:e}})

  }

//method
const offerTable = useRef(null)

    const { onDownload } = useDownloadExcel({
        currentTableRef: offerTable.current,
        filename: "Offer report",
        sheet: "Offers"
      });


  
    // function getOffers(){
    //   axios.get("http://localhost:8090/offer/").then((res)=>{
    //     setOffers(res.data);
  
    //   }).catch((err)=>{
    //     console.log(err.message)
    //     alert(err.message)
    //   })
    // }
  


  //deletion of record
    const deleteOffer = (offerId) => {
        axios
          .delete(`http://localhost:8090/offer/delete/${offerId}`)
          .then((res) => {
            alert(`deleted successfully`);
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      };
    
//PASSING THE ID FOR UPDATE-----------------------------------------------------------------

      const UpdateOffer=(offerId)=>{
      sessionStorage.editemp_id = offerId;
      alert(sessionStorage.editemp_id);
      window.location = (`http://localhost:3000/update/?${offerId}`)
      // //const update=(offerId)=>{

      //   console.log("error")
      //    Navigate('updated',{ state: { id: offerId } }
      //    )
        
    
      }


   


// display offer details in a table 
    return(
      <html>
        <body>
          <div  class = "background-image">
          <h1 class="bb"> Offer Details </h1>
          <input type = 'search' placeholder="Search by Description" onChange={(e)=>{setSearch(e.target.value)}}/>
          <br></br>
          <br></br>
            <div class="kk">
         
          
<center>
        <div class ="table">
            <table width="95%" style={{border: '10px solid rgba(0, 234, 255)'} }ref={offerTable}>
        <thead class="tt">
            <tr>
            <th>offerAmount(Rs)</th>
              <th >expireDate</th>
              <th >Description</th>
              <th >duration</th>
             
              <th >Remove</th>
              <th >Update</th>
              
            </tr>
            </thead>

            <tbody>
            {offer.filter((elem)=>{
              if(search === ""){
                return elem
              }else if(elem.Discription.toLowerCase().includes(search.toLowerCase())){
                return elem

              }
            })      
            .map((item) => (
              <tr>
                <td>{item.offerAmount}</td>
                <td>{item.expireDate}</td>
                <td>{item.Discription}</td>
                <td>{item.duration}</td>
                
                <td>

                  <button id= "btn" onClick={() => {deleteOffer(item._id); refreshPage()}}>Delete</button>
                </td>

                <td>
                <button id="btn" onClick={() => {updateDetails(item)}}>Update</button>

                 
                </td>

                {/* <td>
                <button id="btn" onClick={() => update(item._id)}>Update</button>

                {}
                </td> */}

              
              </tr>
            ))}
            </tbody>
        </table>
        </div>
        </center>
        <div style={{display:'flex',justifyContent : 'right',marginRight : 22}}>
 
        <button onClick={() => generatePDF(
          offer.map(m => ({
            offer: m.offerAmount,
            expirationDate: m.expireDate,
            Description:m.Discription,
            Duration : m.duration
          }
          )), columnNames, false, "OfferReport")} 
          
          type='submit'style={{fontWeight : 'bold', marginLeft:'16px'}}>
            Download Report
        </button>
        {/*<button class= "btn btn-dark" onClick={onDownload} className="btn btn-success">Generate Report</button> */}
        </div>

        </div>
        </div>
        </body>
        </html>
    )
    function refreshPage() {
      window.location.reload(false);
    }
            
            }

export default View;