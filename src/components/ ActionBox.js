import React, { Component } from 'react';

class ActionBox extends Component {
  render() {
    return (
      <div className="action-box">
        <div className="action-box__wrapper">
          {...children}
        </div>
      </div>
    );
  }
};

export default ActionBox;