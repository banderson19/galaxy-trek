import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {editSpaceshipName, setSpaceship, getSpaceships, deleteSpaceship} from './../../ducks/reducers';


class ShipComponent extends Component {
    constructor() {
        super()
        this.state = {
            editReady: false,
            name: null
        }
    }

    editName = () => {
        this.setState({ editReady: true })
    }

    nameChange = (val) => {
        this.setState({
            name: val
        })
    }

    updatePost = () => {
        let { name } = this.state

        editSpaceshipName(name)
    }

    render() {
        console.log(114, this.props.spaceship)
        return (
              <div> 
                  <div> 

                      {this.state.editReady == false && <h3 style={{fontWeight:'bold', color: 'white', marginBottom: 5 }}> {this.props.spaceship.name} </h3>}
                      {this.state.editReady == true && 
                        <div>
                            <input onChange={(e) => {this.nameChange(e.target.value)}} placeholder="New Ship Name"/>
                            <button onClick={this.updatePost()}>update</button>
                        </div>}

                      <button onClick={() => this.editName()}>
                          <i className="far fa-edit" style={{marinRight: 10}}></i>
                      </button>
                      <button onClick={this.spaceship}>
                            <i className="fas fa-trash" style={{marginLeft: 10}}></i>
                        </button>
                  </div>
                  <div className="image" style={{
                      backgroundImage: `url(${this.props.spaceship.img})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      width: 400,
                      height: 300,
                      margin: 10
                      }}>
                      <div className="middle">
                          {/* <div className="text">set as spaceship </div> */}
                          <Link className="text" to="/dashboard">
                              <button className="button" onClick={(e) => this.props.setSpaceship(this.props.spaceship)}>Set your spaceship as <br/> {this.props.spaceship.name}</button>
                          </Link>
                      </div>                  
                  </div>
              </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {spaceship, spaceshipsData} = state;

    return {
        // spaceship,
        // spaceshipsData
    }
}

export default connect(mapStateToProps, {setSpaceship, editSpaceshipName, deleteSpaceship})(ShipComponent);