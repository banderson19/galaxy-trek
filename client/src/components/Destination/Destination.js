import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import LocationServices from './LocationServices';

import './destination.css';

import background_space from './../../img/background_space.jpg';


// import {setSpaceship} from './../../ducks/reducers';

class Destination extends Component {
    constructor() {
        super() 
    }

    render() {
        return(
            <div className="body">
                <div className="destination_header">
                    <h1>Destination page</h1>
                    <Link to="/dashboard"><button>Back to Dashboard</button></Link>
                </div>
                <LocationServices/>
            </div>
        )
    }
}


// const mapStatetoProps = (state) => {
//     const {spaceship} = state;

//     return {
//         spaceship
//     }
// }

// export default connect(mapStatetoProps, {setSpaceship})(Market);

export default Destination;
