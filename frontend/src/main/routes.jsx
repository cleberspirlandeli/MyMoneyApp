import React from 'react'
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard from './../dashboard/dashboard'
import BillingCicle from './../billingcycle/billingCicle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCicle' component={BillingCicle} />
        <Redirect from='*' to='/' />
    </Router>
)