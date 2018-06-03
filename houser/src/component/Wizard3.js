import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateMortage, updateRent } from '../redux/reducer'

class Wizard3 extends Component {
    constructor(props) {
        super(props);

        this.addHouse = this.addHouse.bind(this)
    }

    addHouse() {
        let { imgUrl, propertyName, address, city, state, zip, mortgage, rent } = this.props
        let body = { imgUrl, propertyName, address, city, state, zip, mortgage, rent }

        axios.post(`/api/houses`, body)
        .then((res) => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <p>Monthly Mortgage Amount</p>
                <input
                    type="text"
                    placeholder='0'
                    onChange={(e) => this.props.updateMortage(e.target.value)} />
                <br />
                <p>Desired Monthly Rent</p>
                <input
                    type="text"
                    placeholder='0'
                    onChange={(e) => this.props.updateRent(e.target.value)} />
                <hr />
                <Link to="/wizard/2">
                    <button>
                        Previous Step
                    </button>
                </Link>
                <Link to='/'>
                    <button
                        onClick={this.addHouse}>
                        Complete
                </button>
                </Link>
                <br />
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        propertyName: state.propertyName,
        imgUrl: state.imgUrl,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, { updateMortage, updateRent })(Wizard3)