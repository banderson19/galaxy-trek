import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import SpaceshipContainer from './SpaceshipContainer';
import DestinationContainer from './DestinationContainer';
import MissionContainer from './../MissionStatus/MissionContainer';
import LocationServices from './../Destination/LocationServices';

class Dashboard extends Component {

    render() {
        const styles = this.styles();
        return(
            <div>
                <div>
                    <h2>Welcome space traveler</h2>
                </div>
                <div>
                    <div style={styles.mainContainer}>
                        <SpaceshipContainer/>   
                        <DestinationContainer/>
                    </div>
                    <div style={styles.missionContainer}>
                        <div>
                            <MissionContainer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    styles = () => {
        return {
            mainContainer: {
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                backgroundColor: 'lightblue',
                height: 650
            },
            missionContainer: {
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                backgroundColor: 'grey',
                height: 600,
                width: 1200,
                margin: 'auto'
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        spaceship: state.spaceship
    }
}

export default connect(mapStateToProps)(Dashboard);