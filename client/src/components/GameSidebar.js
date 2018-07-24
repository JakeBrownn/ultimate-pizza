import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Shop from './Shop';
import SidebarButtons from './SidebarButtons';

const propTypes = {
  sidebarClass: PropTypes.string
};

class GameSidebar extends Component {
  render() {
    const { sidebarClass } = this.props.toggles;
    const sidebarClassName = (`sidebar__overlay sidebar__overlay--${sidebarClass}`);
    
    return (
      <div className='sidebar'>
        <div className={sidebarClassName}></div>
        <Shop />
        <SidebarButtons />
      </div>
    )
  }
}

const mapStateToProps = ({ toggles }) => {
  return { toggles };
};

GameSidebar.propTypes = propTypes;

export default connect(mapStateToProps)(GameSidebar);
