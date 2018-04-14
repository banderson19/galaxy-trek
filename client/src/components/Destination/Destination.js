import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import LocationServices from './LocationServices';

// import {setSpaceship} from './../../ducks/reducers';

class Destination extends Component {
    constructor() {
        super() 
    }

    render() {
        return(
            <div>
                <h1>Destination page</h1>
                <Link to="/dashboard"><button>Back to Dashboard</button></Link>
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
