import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import ShipComponent from './ShipComponent'
import {setSpaceship, createSpaceship, getSpaceships} from './../../ducks/reducers';

import starship_hanger from './../../img/starship_hanger.png';
import './market.css'

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
        console.log('getting here', this.spaceshipsData)
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
        let { name, img } = this.state
        createSpaceship({ name, img })
    }

    render() {
        const {setSpaceship, createSpaceship} = this.props;
        const styles = this.styles();
        const {spaceship, editName, editReady} = this.props;
        return(
            <div>
                <div className="header">
                    <h2>CHOOSE YOUR SHIP</h2>
                    <Link to="/dashboard"><button>Back to Dashboard</button></Link>
                </div>
                <div style={styles.mainContainer}>
                    <div style={styles.shipContainer}>                
                        {this.props.spaceshipsData.map(spaceship => {
                            console.log(spaceship)
                            return (
                             
                                    <ShipComponent 
                                        spaceship={spaceship} 
                                        key={spaceship.id}
                                        />
                            )
                        })}
                        <div style={styles.newShipContainer}>
                            <h3>Add New Ship</h3>
                            <input onChange={this.handleNameInput} placeholder="Ship Name"/><br/>
                            <input onChange={this.handleImgInput} placeholder="Url Img"/><br/>
                            <button onClick={this.createSpaceship}>Save Ship</button>
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
                    justifyItems: 'spaceAround',
                    backgroundImage: `url(${starship_hanger})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                },  
                shipContainer: {
                    display: 'flex',
                    flexFlow: 'row wrap',
                    position: 'relative',
                    alignContent: 'center',
                    marginLeft: 40,
                    marginRight: 'auto'
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