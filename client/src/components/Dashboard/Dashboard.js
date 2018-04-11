import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class Dashboard extends Component {

    render() {
        return(
            <div>
                <div>
                    <h2>Welcome space traveler</h2>
                    <Link to='market'><button>Market</button></Link>
                </div>
                <div>
                    <p>my ship {this.props.spaceship.name}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        spaceship: state.spaceship
    }
}

export default connect(mapStateToProps)(Dashboard);