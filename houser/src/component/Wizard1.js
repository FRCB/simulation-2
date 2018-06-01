import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../redux/reducer'

class Wizard1 extends Component {

    render() {
        return (
            <div>
                <p>Property Name</p>
                <input
                    type="text"
                    placeholder='Enter name'
                    onChange={(e) => this.props.updateName(e.target.value)} />
                <br />
                <p>Address</p>
                <input
                    type="text"
                    placeholder='Enter address'
                    onChange={(e) => this.props.updateAddress(e.target.value)} />
                <br />
                <p>City</p>
                <input
                    type="text"
                    placeholder='Enter city'
                    onChange={(e) => this.props.updateCity(e.target.value)} />
                <br />
                <p>State</p>
                <input
                    type="text"
                    placeholder='Enter state'
                    onChange={(e) => this.props.updateState(e.target.value)} />
                <br />
                <p>Zip</p>
                <input
                    type="text"
                    placeholder='Enter Zip'
                    onChange={(e) => this.props.updateZip(e.target.value)} />
                <hr />
                <Link to="/wizard/2">
                    <button>
                        Next Step
                    </button>
                </Link>
                <br />
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
    }
}

export default connect(mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip })(Wizard1)
