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
                <div>
                    <Link to='/destination'><button>Destination</button></Link>
                </div>
                <div>
                    <h2>{this.props.destination.name}</h2>
                    <div style={{
                        backgroundImage: `url(${this.props.destination.img})`,
                        backgroundPostition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: 400,
                        height: 300,
                        marginTop: 25                  
                    }}></div>
                <div>
                    {/* <h4>{this.props.destination.description}</h4>
                    <h4>Inhabitable: {this.props.destination.inhabitable}</h4>
                    <h4>{this.props.destination.destance_to} light years away</h4> */}
                </div>
                </div>
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
        destination: state.destination
    }
}

export default connect(mapStateToProps)(DestinationContainer);