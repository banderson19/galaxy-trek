import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';


import {setFuelLevel, incrementStep, decreaseFuelLevel, decreaseJewelsLbs} from './../../ducks/reducers';


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

class Step_3 extends Component{
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
    const {setFuelLevel, decreaseFuelLevel, incrementStep, decreaseJewelsLbs} = this.props;
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
          <h2 ref={subtitle => this.subtitle = subtitle}>Warning: Pirates approaching. <br/>
          1. Evade them by going light speed <br/>
          2. Pay them off with 100 lbs of precious metals
          </h2>
            <button onClick={(e) => {
                this.closeModal
                decreaseFuelLevel(30)
                incrementStep()
            }}>skirt skirt</button>
            <button onClick={ (e) => {
                this.closeModal
                incrementStep()
                decreaseJewelsLbs(3000)
            }}>Pay up b*tch</button>
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

export default connect(mapStateToProps, {setFuelLevel , incrementStep, decreaseFuelLevel, decreaseJewelsLbs})(Step_3);
