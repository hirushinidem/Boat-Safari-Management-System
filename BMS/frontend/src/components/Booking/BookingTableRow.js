import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class BookingTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteBooking = this.deleteBooking.bind(this);
    }

    deleteBooking() {
        axios.delete('http://localhost:8090/bookings/delete-booking/' + this.props.obj._id)
            .then((res) => {
                alert('booking successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {

        function refreshPage() {
            window.location.reload(false);
        }


        return (

            <tr>

                <td>{this.props.obj.first_name}</td>
                <td>{this.props.obj.last_name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.passenger}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.time}</td>

                <td>
                    <Link className="edit-link" to={"/edit-booking/" + this.props.obj._id}>
                        <i class="fas fa-edit"></i>
                        Update
                    </Link>
                    <ui>&emsp;</ui>


                    <Button onClick={() => { this.deleteBooking(); refreshPage() }} size="vh" variant="danger">
                        <i class="far fa-trash-alt"></i>
                        Cancel</Button>

                    <ui>&emsp;</ui>

                    <Button size="vh" variant="success">
                        <i class="fa fa-credit-card" aria-hidden="true"></i>
                        Proceed to Checkout</Button>


                </td>
            </tr>

        );
    }


}