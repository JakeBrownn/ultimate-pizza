import React, { Component } from 'react';
import { connect } from 'react-redux';

import Shop from './Shop';
import SidebarButtons from './SidebarButtons';

class GameSidebar extends Component {
  render() {
    const { sidebarClass } = this.props.toggles;

    return (
      <div className={`sidebar sidebar--${sidebarClass}`}>
        <Shop />
        <SidebarButtons />
      </div>
    )
  }
}

// Map State from Store into Props
const mapStateToProps = ({ toggles }) => {
  return { toggles };
};

export default connect(mapStateToProps)(GameSidebar);
