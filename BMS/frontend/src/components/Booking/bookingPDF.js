import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BookingPDFTable from './BookingPDFTable';


export default class bookingPDF extends Component {

  constructor(props) {
    super(props)
    this.state = {
      returns: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8090/bookings/')
      .then(res => {
        this.setState({
          returns: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.returns.map((res, i) => {
      return <BookingPDFTable obj={res} key={i} />;
    });
  }



  render() {
    function printPage() {
      window.print();
    }
    return (<div className="table-wrapper">
      <br />
      <br />
      <br />
      <h2>&nbsp;BOOKING DETAILS</h2><br />




      <Table striped bordered hover variant="white">

        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>No.OF Passengers</th>
            <th>Date</th>
            <th>Time</th>

          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button onClick={printPage}>Print</button>
    </div>);
  }
}