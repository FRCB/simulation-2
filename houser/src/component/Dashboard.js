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
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        axios.get('/api/houses').then((res) => {
            this.setState({ houses: res.data })
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`).then(res => {
            this.setState({ houses: res.data })
        })
    }

    render() {
        let mappedHouses = this.state.houses.map((e, i) => {
            return (
                <div key={i}>
                    <House
                        dbid={e.id}
                        dbimgurl={e.imageurl}
                        dbpropertyname={e.propertyname}
                        dbaddress={e.address}
                        dbcity={e.city}
                        dbstate={e.state}
                        dbzip={e.zip}
                        dbmortgage={e.mortgage}
                        dbrent={e.rent}
                        dbdeleteHouse={this.deleteHouse}
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
