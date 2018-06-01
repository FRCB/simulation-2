import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
        this.addHouse = this.addHouse.bind(this)
    }

    addHouse() {
        let body = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }
        axios.post(`/api/houses`, body).then((res) => {
            this.setState({
                houses: res.data,
                name: '',
                address: '',
                city: '',
                state: '',
                zip: ''
            })
        })
    }



    render() {
        return (
            <div>
                <h2>Wizard</h2>
                <br />
                <input
                    type="text"
                    placeholder='Enter name' />
                <br />
                <input
                    type="text"
                    placeholder='Enter address' />
                <br />
                <input
                    type="text"
                    placeholder='Enter city' />
                <br />
                <input
                    type="text"
                    placeholder='Enter state' />
                <br />
                <hr />
                <button
                    onClick={this.addHouse}>
                    Complete
                </button>
                <br />
                <Link to='/'>
                    <button>
                        Cancel
                    </button>
                </Link>
            </div>
        )
    }
}
