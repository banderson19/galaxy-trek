import React from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';



export default (
    <Router>
        <div>
          <Route component={Login} path='/' exact/>
          <Route component={Dashboard} path='/dashboard'/>
        </div>
    </Router>
)