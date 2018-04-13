import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class DestinationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        const styles = this.styles();
        return (
            <div style={styles.destinationBoard}>
                <Link to='/destination'><button>Destination</button></Link>
            </div>
        )
    }

    styles = () => {
        return {
        destinationBoard: {
            display: 'flex',
            justifyContent: 'flex-start',
            width: 550,
            height: 600,
            backgroundColor: 'lightgrey',
            margin: 5
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        spaceship: state.spaceship
    }
}

export default connect(mapStateToProps)(DestinationContainer);