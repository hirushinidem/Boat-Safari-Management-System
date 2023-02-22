import React, { Component } from 'react';

export default class BookingPDFTable extends Component {

    render() {

        return (

            <tr>

                <td>{this.props.obj.first_name}</td>
                <td>{this.props.obj.last_name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.passenger}</td>
                <td>{this.props.obj.date}</td>
                <td>{this.props.obj.time}</td>

            </tr>

        );
    }
}