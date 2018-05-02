import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getVerticalPosition, getHorizontalPosition } from './PositionUtility';
import axios from 'axios';

import {setDestination} from './../../ducks/reducers';


class LocationServices extends Component {
    constructor() {
        super()
        this.state = {
            destinations: []
        }
    }

    componentDidMount = () => {
        axios({
            method: 'GET', 
            url: 'http://localhost:4001/api/destinations'
        }).then(response => {
            console.log(444, response.data)
            this.setState({destinations: response.data})
        })
    }

    render() {
        const {setDestination} = this.props;
        const styles = this.styles();
        return (
            <div style={styles.window}>
                {this.state.destinations.map((destination, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.map,
                            top: destination.margin_top,
                            left: destination.margin_left
                        }}>
                        <Link to="/dashboard">
                            <button onClick={ (e) => setDestination(destination)}>{destination.name}</button>
                        </Link>
                        {/* <p>{destination.name}</p> */}
                    </div>
                ))}
            </div>
        )
    }

    styles = () => {
        return {
            map: {
                position: 'relative'
            },
            window: {
                display: 'flex',
                width: 800,
                height: 500,
                backgroundColor: 'grey',
                margin: 'auto'
            }
        }
    }
}

const mapStateToProps = (state) => {
    const {destination} = state;

    return {
        destination
    }
}

export default connect(mapStateToProps, {setDestination})(LocationServices);