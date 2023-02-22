import React,{useState, useEffect,useRef} from "react";
import axios from "axios";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useNavigate } from "react-router-dom";

export default function MyPayment(){
    //declare payment as as state to use
    const [Payment, setPayment] = useState([]);
    //get function to display payment details
    useEffect(()=>{
        function getPayment(){
            axios.get("http://localhost:8090/Payment/")
                .then((res) => {
                setPayment(res.data);
            }).catch((err) => {
                alert(err.massage);
            })
        }
        getPayment();
    }, []);
    //delete function to delete payment details
    const deletePayment = (paymentID) => {
        axios.delete(`http://localhost:8090/Payment/delete/${paymentID}`)
            .then((res) => {
            alert(`deleted successfully`);
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
    };
    //Payment update
    const updatePay=(id)=>{
        sessionStorage.editPay_id = id;
        alert(sessionStorage.editPay_id);
       
        window.location = `http://localhost:3000/payment/update/?${id}`;
     }

    //  const Update=(paymentID)=>{
    //     console.log("error")
    //      Navigate('Update',{ state: { id: paymentID } }
    //      )}
    //generate report
    const paymentTabel = useRef(null)

    const { onDownload } = useDownloadExcel({
        currentTableRef: paymentTabel.current,
        filename: "Payment report",
        sheet: "Payments"
      });

    //frontend react app
    return(
        <div class = "pay">
        <div className="container">
            
            <br/>
            <br/>
            <centre><h1>Payments list</h1></centre>
            <br/>
            <br/>
            <table className="table table-striped table-dark" ref={paymentTabel}>
                <thead>
                     <tr>
                            <th scope="col">Booking ID</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Paid Amount</th>
                            <th scope="col">Method</th>
                            <th scope="col">Payment Date</th>
                     </tr>
                </thead>
                <tbody>
                    {/*show data in a table derived from the database*/}
                    {
                         Payment.map((Payment)=>(
                            <tr key={Payment._id} >
            
                                <td>{Payment.Booking}</td>
                                <td>{Payment.Amount}</td>
                                <td>{Payment.Discount}</td>                                
                                <td>{Payment.Paid}</td>
                                <td>{Payment.Method}</td>
                                <td>{Payment.createdAt}</td>
            
                                <td>{<button class="btn btn-danger" 
                                     onClick={() => {deletePayment(Payment._id)
                                     }}>delete</button>}
                                    {<button id="update" class="btn btn-dark" 
                                    onClick={() => {updatePay(Payment._id)
                                    }}>update</button>}
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
            <br/>
            <button type="button" onClick={onDownload} className="btn btn-success float-right m-3">Download report</button>
        </div>
        </div>
    )
    

}