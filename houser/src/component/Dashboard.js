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
    }

    componentDidMount() {
        axios.get('/api/houses').then((res) => {
            this.setState({ houses: res.data })
        })
    }

    deleteProduct(id) {
        axios.delete(`api/houses/${id}`).then(res => {
            this.setState({ houses: res.data })
        })
        // .then(this.props.toRefresh())
    }

    render() {
        let mappedHouses = this.state.houses.map((e, i) => {
            return (
                <div key={i}>
                    <House
                        id={e.id}
                        imgurl={e.imageurl}
                        propertyname={e.propertyname}
                        address={e.address}
                        city={e.city}
                        state={e.state}
                        zip={e.zip}
                        mortgage={e.mortgage}
                        rent={e.rent}
                        deleteProduct={this.deleteProduct}
                    />
                </div>
            )
        })
        return (
            <div>
                <h2>Dashboard</h2>
                {mappedHouses}
                <br />
                <Link to='/wizard' >
                    <button>
                        Add New Property
                    </button>
                </ Link>
            </div>
        )
    }
}
