import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class SpaceshipContainer extends Component {
    constructor() {
        super();
    }

    render() {
        const styles = this.styles();
        return (
            <div>
                <div style={styles.spaceshipBoard}>
                            <div style={styles.marketButton}>
                                <Link to='/market'><button>Market</button></Link>
                            </div>
                            <div>
                                <h2>Spaceship: {this.props.spaceship.name}</h2>
                                <div style={{
                                    backgroundImage: `url(${this.props.spaceship.img})`,
                                    backgroundPostition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: 400,
                                    height: 300                     
                                }}></div>
                                <h3>manuverability:</h3>
                                <h3>fuel compacity:</h3>
                            </div>
                        </div>
            </div>
        )
    }

    styles = () => {
        return {
            spaceshipBoard: {
                display: 'flex',
                justifyContent: 'flex-start',
                width: 550,
                height: 600,
                backgroundColor: 'lightgrey',
                margin: 5
            },        
            marketButton: {
                position: 'relative',
                marginRight: 20
            }
            
        }
    }
}

const mapStateToProps = state => {
    return {
        spaceship: state.spaceship
    }
}

export default connect(mapStateToProps)(SpaceshipContainer);