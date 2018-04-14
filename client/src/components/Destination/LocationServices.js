import React, {Component} from 'react';
import { getVerticalPosition, getHorizontalPosition } from './PositionUtility';
import axios from 'axios';


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
            url: 'http://localhost:4000/api/destinations'
        }).then(response => {
            console.log(444, response.data)
            this.setState({destinations: response.data})
        })
    }

    render() {
        console.log('this.state.destinations', this.state.destinations)
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
                        }}
                        >
                        <p>{destination.name}</p>
                    </div>
                ))}

                {/* {this.state.destinations.map(destination => {
                    return(
                        <div key={destination.id} style={styles.destination}>
                            <div>
                                <h3>{destination.name}</h3>
                            </div>
                        </div>
                    )
                })} */}
                {/* {[
                    1, 1
                ].map((item, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.box,
                            top: getVerticalPosition(),
                            left: getHorizontalPosition()
                        }}
                        />
                ))} */}
            </div>
        )
    }

    styles = () => {
        return {
            map: {
                width: 50,
                height: 50,
                backgroundColor: 'blue',
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

export default LocationServices;