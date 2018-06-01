import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Wizard from './component/Wizard';


export default (
    < Switch >
        <Route exact component={Dashboard} path='/' />
        <Route component={Wizard} path='/wizard/' />
    </Switch >

)