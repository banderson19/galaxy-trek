import React, {Component} from 'react';
import { connect } from 'react-redux';

import './shipPath.css';

class ShipPath extends Component{

  render() {
      const { currentStep } = this.props
    return (

      <div className="displayBox">
        {currentStep >= 0 && <div className="stepOne"></div>}
        {currentStep >= 1 && <div className="stepTwo"></div>}
        {currentStep >= 2 && <div className="stepThree"></div>}
        {currentStep >= 3 && <div className="stepFour"></div>}
      </div>
    );
    
  }
}


const mapStateToProps = (state) => {
  const {currentStep} = state;

  return {
      currentStep
  }
}

export default connect(mapStateToProps)(ShipPath);
