import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Market;