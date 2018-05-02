import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';


import {setFuelLevel, incrementStep, decreaseFuelLevel, increaseJewelsLbs} from './../../ducks/reducers';


const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: 300,
    width: '75%'
  }
};

Modal.setAppElement('#root')

class Step_4 extends Component{
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    console.log('hi everyone')
    this.setState({modalIsOpen: true});
  }
  afterOpenModal = () => {
    this.subtitle.style.color = '#f00';
  }
  closeModal = () =>  {
    this.setState({modalIsOpen: false});
  }

  

  render() {
    const {setFuelLevel, decreaseFuelLevel, incrementStep, increaseJewelsLbs} = this.props;
    console.log('step 4') 
    return (

      <div>
        <button onClick={this.openModal}>UPDATE</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>
          You have successfully made it through all the obsticles the galaxy has thrown at you. 
          </h2>
            <button onClick={(e) => {
                this.closeModal
                setFuelLevel()
                incrementStep()
                // increaseJewelsLbs()
            }}>Coast on in</button>
            <button onClick={ (e) => {
                this.closeModal
                incrementStep()
                // increaseJewelsLbs()
            }}>Light speed to safety</button>
        </Modal>
        {/* add video of flying off into space */}
        <div>
          <h1>congrats on making it to ur destination</h1>
        </div>
      </div>
    );
  }
}
// add jewels to each planet


const mapStateToProps = (state) => {
  const {fuelLevel} = state;

  return {
      fuelLevel
  }
}

export default connect(mapStateToProps, {setFuelLevel, incrementStep, increaseJewelsLbs})(Step_4);
