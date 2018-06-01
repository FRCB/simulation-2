import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Wizard1 from './Wizard1';
import Wizard2 from './Wizard2';
import Wizard3 from './Wizard3';
import { updateName, updateImgURL, updateAddress, updateCity, updateState, updateZip, updateMortage, updateRent } from '../redux/reducer'


class Wizard extends Component {

    componentDidMount() {
        axios.get('/api/houses').then((res) => {
            this.setState({ houses: res.data })
        })
    }



    render() {

        return (
            <div>
                <h2>Wizard</h2>
                <br />
                < Switch >
                    <Route component={Wizard1} path='/wizard/1' />
                    <Route component={Wizard2} path='/wizard/2' />
                    <Route component={Wizard3} path='/wizard/3' />
                </Switch >
                <Link to='/'>
                    <button>
                        Cancel
                    </button>
                </Link>
            </div>
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

export default connect(mapStateToProps, { updateName, updateImgURL, updateAddress, updateCity, updateState, updateZip, updateMortage, updateRent })(Wizard)