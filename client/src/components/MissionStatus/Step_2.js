import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';


import {setFuelLevel, incrementStep, resetStep} from './../../ducks/reducers';


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

class Step_2 extends Component{
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal = () => {
    this.subtitle.style.color = '#f00';
  }
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  astroField = () => {
    let primeNumber = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    let num = Math.floor(Math.random() * 100);
    for (var i = 0; i < primeNumber.length; i++) {
      console.log(primeNumber[i], num)
      if (num == primeNumber[i]) {
        alert('hell yah motha fucka')
        this.props.setFuelLevel(80)
        incrementStep()
        return true;
      }
    }
    alert('Im sorry, but the person you dialed is unavailable. Please try again later')
    this.props.setFuelLevel(0)
    resetStep()
    console.log('current step', resetStep())
    return false;
  }
  // add to function that reset the steps back to zero

  render() {
    const {setFuelLevel} = this.props;
    return (

      <div>
        <button onClick={this.openModal}>WARNING</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>
            Warning: Astroid field approaching. <br/> 
            1. Travel safely around the astrofield, but burn more fuel. <br/>
            2. Save your fuel for the jouney ahead, and test your skills by going through astrofield and risking death.
          </h2>
            <button onClick={(e) => {
              this.props.setFuelLevel(65)
              this.props.incrementStep()
            }} >Fly around astrofield</button>
            <button onClick={(e) => {
              this.closeModal
              this.astroField()
              }}>Risk it for the bisquit!!</button>
        </Modal>
      </div>
    );
    
  }
}


const mapStateToProps = (state) => {
  const {fuelLevel} = state;

  return {
      fuelLevel
  }
}

export default connect(mapStateToProps, {setFuelLevel , incrementStep})(Step_2);
