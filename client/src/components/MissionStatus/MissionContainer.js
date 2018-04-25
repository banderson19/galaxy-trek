import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Modal from 'react-modal';
import { incrementStep } from '../../ducks/reducers'
// import ReactDOM from 'react-dom';
// import bootbox from 'bootbox';

import ShipPath from './ShipPath'
import Modal_1 from './Modal_1';
import Modal_2 from './Modal_2';

Modal.setAppElement('#root');

class MissionContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showModal: false
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
        console.log(111, this.props.currentStep)
        return (
            <div>
                 <button onClick={() => this.setState({ showModal1: true})}>Launch this Mofo in space!!</button>
                {this.props.currentStep === 0 && <Modal_1 showModal={this.state.showModal1} />}
                <h1> Fuel Level: {this.props.fuelLevel} </h1>
                <div style={{ marginTop: 100}}>
                    {this.props.currentStep === 1 && <Modal_2/>}
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
        currentStep: state.currentStep
    }
}

export default connect(mapStateToProps, {incrementStep})(MissionContainer);