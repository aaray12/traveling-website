import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import "./Hotels.css";
// import "./style.css";
function Hotels(props) {
    return (
            <Card className="single-card">
                <Card.Body>
                <Card.Title>Top Places to Stay</Card.Title>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Hotel</th>
                            <th>Rate per Night</th>
                            <th>Stars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.hotelInfo.map(hotel => {
                            return (
                                <tr key={props.hotelInfo.indexOf(hotel)} >
                                    <td><img src={hotel.image} alt={hotel.name} /></td>
                                    <td>{hotel.name}</td>
                                    <td>{hotel.price}</td>
                                    <td>{hotel.star}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                </Card.Body>
            </Card>
    )
}

export default Hotels;