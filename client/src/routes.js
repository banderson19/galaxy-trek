import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Market from './components/Market/Market';



export default (
    <Router>
        <div>
          <Route component={Login} path='/' exact/>
          <Route component={Dashboard} path='/dashboard'/>
          <Route component={Market} path='/market'/>
        </div>
    </Router>
)