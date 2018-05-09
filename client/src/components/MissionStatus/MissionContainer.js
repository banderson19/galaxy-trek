import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Modal from 'react-modal';
import { incrementStep, setJewelsLbs } from '../../ducks/reducers'
// import ReactDOM from 'react-dom';
// import bootbox from 'bootbox';

import './missionContainer.css'

import ShipPath from './ShipPath'
import Step_1 from './Step_1';
import Step_2 from './Step_2';
import Step_3 from './Step_3';
import Step_4 from './Step_4';

Modal.setAppElement('#root');

class MissionContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showModal: false,
        };
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }
    
    // onLaunch = () => {
    //     setTimeout( () => {
    //         this.myFunction() 
    //     }, 2000)
    // }


    render() {
        console.log('current step', this.props.currentStep)
        return (
            <div className="containerBox">
                 <button onClick={() => this.setState({ showModal1: true})}>Launch this Mofo in space!!</button>
                {this.props.currentStep === 0 && <Step_1 showModal={this.state.showModal1} />}
                <h1> Fuel Level: {this.props.fuelLevel} </h1>
                <h1> Jewels: {this.props.jewelsLbs} lbs</h1>
                <div style={{ marginTop: 100}}>
                    {this.props.currentStep === 1 && <Step_2/>}
                    {this.props.currentStep === 2 && <Step_3/>}
                    {this.props.currentStep === 3 && <Step_4/>}
                </div>
                <ShipPath/>
                
            </div>
        )
    }

    styles = () => {
        return {
            content: {
                // height: 200
                // top: 20,
                // left: 20,
                // right: 'auto',
                // bottom: 'auto',
                // marginRight: '-50%',
                // transform: 'translate(-50%, -50%)'
            },
            Modal: {
                height: 200
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        fuelLevel: state.fuelLevel,
        currentStep: state.currentStep,
        jewelsLbs: state.jewelsLbs
    }
}

export default connect(mapStateToProps, {incrementStep, setJewelsLbs})(MissionContainer);