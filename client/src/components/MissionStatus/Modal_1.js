import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { connect } from 'react-redux';


import {setFuelLevel, incrementStep} from './../../ducks/reducers';


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

class Modal_1 extends Component{
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  

  render() {
    const {setFuelLevel} = this.props;
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
              this.props.setFuelLevel(100)
              this.props.incrementStep()
            }} >Launch</button>
            <button onClick={this.closeModal}>Abort mission</button>
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

export default connect(mapStateToProps, {setFuelLevel , incrementStep})(Modal_1);
