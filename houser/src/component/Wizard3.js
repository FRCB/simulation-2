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

    componentDidMount() {
        axios.get('/api/houses').then((res) => {
            this.setState({ houses: res.data })
        })
    }

    addHouse() {
        let body = {
            name: this.props.name,
            imgurl: this.props.imgurl,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            mortgage: this.mortgage,
            rent: this.props.rent
        }
        axios.post(`/api/houses`, body).then((res) => {
            this.setState({
                houses: res.data,
                imgurl: this.props.imgurl,
                propertyname: this.props.name,
                address: this.props.address,
                city: this.props.city,
                state: this.props.state,
                zip: this.props.zip,
                mortgage: this.mortgage,
                rent: this.props.rent

            })
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

export default connect(mapStateToProps, { updateMortage, updateRent })(Wizard3)