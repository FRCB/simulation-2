import React from 'react';
import { connect } from 'react-redux';

function House(props) {

    return (
        <div>
            {props.houses}
            <p>Property Name: {props.dbpropertyname}</p>
            <img src={props.dbimgurl} alt='house' />
            <p>Address: {props.dbaddress} </p>
            <p>City: {props.dbcity}</p>
            <p>State: {props.dbstate}</p>
            <p>Zip: {props.dbzip}</p>
            <p>Monthly Mortgage: {props.dbmortgage}</p>
            <p>Monthly Rent: {props.dbrent}</p>
            <hr />
            {props.houses}
            <p>Property Name: {props.name}</p>
            <img src={props.imgurl} alt='house' />
            <p>Address: {props.address} </p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <p>Monthly Mortgage: {props.mortgage}</p>
            <p>Monthly Rent: {props.rent}</p>
            <button
                onClick={props.dbdeleteHouse(props.id)}>
                Delete
            </button>
            <hr />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        name: state.name,
        imgurl: state.imgurl,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps)(House)

