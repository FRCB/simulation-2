import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Wizard from './component/Wizard';
import Wizard1 from './component/Wizard1';
import Wizard2 from './component/Wizard2';
import Wizard3 from './component/Wizard3';


export default (
    < Switch >
        <Route exact component={Dashboard} path='/' />
        <Route component={Wizard} path='/wizard/' />
    </Switch >

)