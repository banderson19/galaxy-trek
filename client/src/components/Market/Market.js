import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {setSpaceship} from './../../ducks/reducers';

class Market extends Component {
    constructor() {
        super()
        this.state= {
            spaceships: []
        }
    }

    componentWillMount = () => {
        axios({
            method: 'GET', 
            url: 'http://localhost:3030/api/spaceships'
        }).then(response => {
            console.log(222, response.data)
            this.setState({spaceships: response.data})
        })
    }

    render() {
        const {setSpaceship} = this.props;
        return(
            <div>
                <h2>Market place</h2>
                <div>
                    {this.state.spaceships.map(spaceship => {
                        return (
                            <div key={spaceship.id}>
                                <h3> {spaceship.name} </h3>
                                <div style={{
                                    backgroundImage: `url(${spaceship.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: 400,
                                    height: 300}}>
                                </div>
                                <button onClick={ (e) => setSpaceship(spaceship)}>Set your spaceship as {spaceship.name}</button>
                            </div>
                        )
                    })}
                </div>
                <Link to="/dashboard"><button>Back to Dashboard</button></Link>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    const {spaceship} = state;

    return {
        spaceship
    }
}

export default connect(mapStatetoProps, {setSpaceship})(Market);