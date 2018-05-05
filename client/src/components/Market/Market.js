import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {setSpaceship, createSpaceship, getSpaceships} from './../../ducks/reducers';

class Market extends Component {
    constructor() {
        super()
        this.state= {
            spaceshipsData: [],
            name: null,
            img: null
        }
    }


    componentDidMount = () => {
        this.props.getSpaceships()
        // axios({
        //     method: 'GET', 
        //     url: 'http://localhost:4001/api/spaceships'
        // }).then(response => {
        //     console.log(222, response.data)
        //     this.setState({spaceships: response.data})
        // })
    }

    handleNameInput = (e) => {
        let name = e.target.value
        this.setState({ name })
    }

    handleImgInput = (e) => {
        let img = e.target.value
        this.setState({ img })
    }

    createSpaceship = () => {
        console.log('here')
        let { name, img } = this.state
        createSpaceship({ name, img })
    }

    render() {
        const {setSpaceship, createSpaceship} = this.props;
        const styles = this.styles();
        console.log(9999, this.props)
        return(
            <div>
                <h2>Market place</h2>
                <Link to="/dashboard"><button>Back to Dashboard</button></Link>
                <div style={styles.shipContainer}>                
                    {this.props.spaceshipsData.map(spaceship => {
                        return (
                            <div key={spaceship.id}>
                                <h3> {spaceship.name} </h3>
                                <div style={{
                                    backgroundImage: `url(${spaceship.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: 400,
                                    height: 300,
                                    margin: 10
                                    }}>
                                </div>
                                <Link to="/dashboard">
                                    <button onClick={(e) => setSpaceship(spaceship)}>Set your spaceship as {spaceship.name}</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div style={styles.newShipContainer}>
                    <h3>Add New Ship</h3>
                    <input onChange={this.handleNameInput} placeholder="Ship Name"/><br/>
                    <input onChange={this.handleImgInput} placeholder="Url Img"/><br/>
                    <button onClick={this.createSpaceship}>Save Ship</button>
                </div>
            </div>
        )
    }

    styles = () => {
            return {
                shipContainer: {
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'spaceAround',
                    alignContent: 'center'
                },
                newShipContainer: {
                    width: 400, 
                    height: 300,
                    backgroundColor: 'lightGrey',
                    margin: 10,
                    paddingTop: 10
                }
            }
        }
}

const mapStateToProps = (state) => {
    const {spaceship, spaceshipsData} = state;

    return {
        spaceship,
        spaceshipsData
    }
}

export default connect(mapStateToProps, {setSpaceship, createSpaceship, getSpaceships})(Market);