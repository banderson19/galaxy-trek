import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class Dashboard extends Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <h2>Welcome space traveler</h2>
                <Link to='market'><button>Market</button></Link>
            </div>
        )
    }
}

export default Dashboard;