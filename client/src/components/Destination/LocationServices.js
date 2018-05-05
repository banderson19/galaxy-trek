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
            destinations: [],
            icon: ''
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
            <div>
                <div style={styles.window}>
                    {this.state.destinations.map((destination, index) => {
                       var type = ''
                       if (destination.type === 'Planet') {
                           type = 'fas fa-globe';
                       } else {
                           type = 'fas fa-star';
                       }
                       return <div
                            key={index}
                            style={{
                                ...styles.map,
                                top: destination.margin_top,
                                left: destination.margin_left
                            }}>
                            <Link to="/dashboard">
                                <button onClick={ (e) => setDestination(destination)}>
                                    <div>
                                            <i className={type}>
                                                {destination.name}
                                            </i>   
                                    
                                    </div>
                                </button>
                            </Link>
                        </div>
                        
    })}
                </div>
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
                width: 1100,
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