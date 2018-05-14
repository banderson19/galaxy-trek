import React, {Component} from 'react';
import { connect } from 'react-redux';

import './shipPath.css';

class ShipPath extends Component{

  render() {
      const { currentStep } = this.props
    return (

      <div className="displayBox">
        {currentStep == 0 && <div className="fas fa-space-shuttle stepOne"></div>}
        {currentStep == 1 && <div className="fas fa-space-shuttle stepTwo"></div>}
        {currentStep == 2 && <div className="fas fa-space-shuttle stepThree"></div>}
        {currentStep == 3 && <div className="fas fa-space-shuttle stepFour"></div>}
        {/* {currentStep == 4 && <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/rDeMS0tNzWkG4" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>} */}
        
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
