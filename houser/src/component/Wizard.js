import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Wizard1 from './Wizard1';
import Wizard2 from './Wizard2';
import Wizard3 from './Wizard3';
import { connect } from 'react-redux';
import { cancel } from '../redux/reducer'



class Wizard extends Component {

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
                    <button
                    onClick={() => this.props.cancel()}
                    >
                        Cancel
                    </button>
                </Link>
            </div>
        )
    }
}

export default connect( null, { cancel })(Wizard)
