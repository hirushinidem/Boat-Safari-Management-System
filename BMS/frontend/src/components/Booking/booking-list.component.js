import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BookingTableRow from './BookingTableRow';
import '../../CSS/styles.css';


export default class BookingList extends Component {

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
      return <BookingTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
    
    <div className="bd">
      <br />
      <div className="container">
      <h2><center>MY BOOKINGS</center></h2><br />

      <Table striped bordered hover id="fbd">

        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>No. Of Passengers</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      <button className="btn btn-primary"><a href="/create-booking" style={{ textDecoration: 'none', color: 'white' }}> &nbsp;ADD BOOKING</a></button>
      
      <button className="btn btn-dark float-right"><a href="/bookingPDF" style={{ textDecoration: 'none', color: 'white' }}> &nbsp; DOWNLOAD BOOKING REPORT</a></button>


      </div>
    </div>);
  }
}