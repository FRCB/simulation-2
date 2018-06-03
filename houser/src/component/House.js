import React from 'react';

export default function House(props) {

    return (
        <div>
            <img src= {props.house.imgurl } alt="house"/>
            <p>Property name: {props.house.propertyname}</p>
            <p>Address: {props.house.address}</p>
            <p>City: {props.house.city}</p>
            <p>State: {props.house.state}</p>
            <p>Zip: {props.house.zip}</p>
            <p>Monthly Mortgage Amount: {props.house.mortgage}</p>
            <p>Desired Monthly Rent: {props.house.rent}</p>
            <button
                onClick={() => props.deleteHouse(props.house.id)}>
                Delete
            </button>
            <hr />
        </div>
    )
}


