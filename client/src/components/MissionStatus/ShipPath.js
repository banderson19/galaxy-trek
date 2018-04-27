import React, {Component} from 'react';
import { connect } from 'react-redux';




class ShipPath extends Component{

  render() {
      const { currentStep } = this.props
    return (

      <div style={{width: '100%', display: 'relative', height: 200, border: '1px solid green'}}>
        {currentStep >= 0 && <div style={{width: 20, height: 2, backgroundColor: 'red', position: 'relative', top: 10, left: 0 }}></div>}
        {currentStep >= 1 && <div style={{width: 20, height: 2, backgroundColor: 'red', position: 'relative', top: 10, left: 30 }}></div>}
        {currentStep >= 2 && <div style={{width: 20, height: 2, backgroundColor: 'red', position: 'relative', top: 10, left: 60 }}></div>}
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
