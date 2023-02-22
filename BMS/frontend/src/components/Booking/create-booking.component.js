import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../../CSS/styles.css';

export default class CreateBooking extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeBookingFirst_name = this.onChangeBookingFirst_name.bind(this);
    this.onChangeBookingLast_name = this.onChangeBookingLast_name.bind(this);
    this.onChangeBookingEmail = this.onChangeBookingEmail.bind(this);
    this.onChangeBookingPhone = this.onChangeBookingPhone.bind(this);
    this.onChangeBookingPassenger = this.onChangeBookingPassenger.bind(this);
    this.onChangeBookingDate = this.onChangeBookingDate.bind(this);
    this.onChangeBookingTime = this.onChangeBookingTime.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      passenger: '',
      date: '',
      time: ''

    }
  }

  onChangeBookingFirst_name(e) {
    this.setState({ first_name: e.target.value })
  }

  onChangeBookingLast_name(e) {
    this.setState({ last_name: e.target.value })
  }


  onChangeBookingEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeBookingPhone(e) {
    this.setState({ phone: e.target.value })
  }

  onChangeBookingPassenger(e) {
    this.setState({ passenger: e.target.value })
  }

  onChangeBookingDate(e) {
    this.setState({ date: e.target.value })
  }

  onChangeBookingTime(e) {
    this.setState({ time: e.target.value })
  }



  onSubmit(e) {
    e.preventDefault()

    const bookingObject = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      passenger: this.state.passenger,
      date: this.state.date,
      time: this.state.time

    };
    axios.post('http://localhost:8090/bookings/create-booking', bookingObject)
      .then(res => console.log(res.data));

    this.setState({ first_name: '', last_name: '', email: '', phone: '', passenger: '', date: '', time: '' })
    this.props.history.push('/booking-list')
  }


  render() {

    return (

      <html><body>
          <div class="bd">
          <br></br>
          <br></br>
      <div className="container">
        <Form  id="fbd" onSubmit={this.onSubmit}>
          

         
          &nbsp;&nbsp;<h3>Fill Details</h3>

          <Form.Group controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.first_name} onChange={this.onChangeBookingFirst_name} required />
          </Form.Group>

          <Form.Group controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="letters" pattern="[a-zA-Z]+" value={this.state.last_name} onChange={this.onChangeBookingLast_name} required />
          </Form.Group>


          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="abc@gmail.com" type="email" value={this.state.email} onChange={this.onChangeBookingEmail} required
            />
          </Form.Group>

          <Form.Group controlId="pnumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="07# #######" type="number" value={this.state.phone} onChange={this.onChangeBookingPhone} required
            />
          </Form.Group>

          <Form.Group controlId="NoOfPasangers">
            <Form.Label>No Of Passengers</Form.Label>
            <Form.Control  placeholder="[1-30]" type="number" value={this.state.passenger} onChange={this.onChangeBookingPassenger} required />
          </Form.Group>

          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" value={this.state.date} onChange={this.onChangeBookingDate} required />
          </Form.Group>


          <Form.Group controlId="time">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" value={this.state.time} onChange={this.onChangeBookingTime} required />
          </Form.Group>



          <br />
          <Button variant="btn btn-primary" block="block" type="submit">
            <i class="far fa-comment-alt"></i>&nbsp; Submit
          </Button>

          <br>
          </br>
          <br>
          </br>


        </Form>
        
      </div>
      </div>
        </body>
        </html>);
  }
}