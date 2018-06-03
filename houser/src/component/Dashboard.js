import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from './House';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            houses: []
        }
        this.getAllHouses = this.getAllHouses.bind(this)
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        this.getAllHouses() 
    }

    getAllHouses() {
        axios.get('/api/houses').then((res) => {
            this.setState({ houses: res.data })
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`)
        .then(this.getAllHouses())
    }

    render() {
        let mappedHouses = this.state.houses.map((house, i) => {
            return (
                <div key={i}>
                    <House
                        house = { house }
                        deleteHouse={this.deleteHouse}
                    />
                </div>
            )
        })

        return (
            <div>
                <h2>Dashboard</h2>
                {mappedHouses}
                <br />
                <Link to='/wizard/1' >
                    <button>
                        Add New Property
                    </button>
                </ Link>
            </div>
        )
    }
}
