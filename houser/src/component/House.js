import React from 'react';

export default function House(props) {
    return (
        <div>
            <hr />
            <p>Property Name: {props.propertyname}</p>
            <p>Address: {props.address} </p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <button
                onClick={props.deleteProduct}>
                Delete
            </button>
            <hr />
        </div>
    )
}

