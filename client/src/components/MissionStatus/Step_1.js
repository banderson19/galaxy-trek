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

class Step_1 extends Component{
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
  closeModal = () =>  {
    this.setState({modalIsOpen: false});
    console.log(this.state)
  }

  

  render() {
    const {setFuelLevel, incrementStep, resetStep} = this.props;
    console.log(this.props.currentStep)
    return (

      <div>
        
        <Modal
          isOpen={this.props.showModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Are you sure you want to launch this mission?</h2>
            <button onClick={(e) => {
              setFuelLevel(100)
              incrementStep()
            }} >Launch</button>
            <button onClick={ (e) => {
              resetStep()
              }}>Abort mission</button>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const {fuelLevel, resetStep} = state;

  return {
      fuelLevel,
      resetStep
  }
}

export default connect(mapStateToProps, {setFuelLevel, incrementStep, resetStep})(Step_1);
