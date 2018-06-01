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
        let body = {
            name: this.state.name,
            imgurl: this.state.imgurl,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            mortgage: this.state.mortgage,
            rent: this.state.rent
        }
        axios.post(`/api/houses`, body).then((res) => {
            this.setState({
                houses: res.data,
                imgurl: '',
                name: '',
                address: '',
                city: '',
                state: '',
                zip: '',
                mortgage: '',
                rent: ''
            })
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
                <button
                    onClick={this.addHouse}>
                    Complete
                </button>
                <br />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        mortgage: state.mortgage,
        rent: state.rent,
    }
}

export default connect(mapStateToProps, { updateMortage, updateRent })(Wizard3)