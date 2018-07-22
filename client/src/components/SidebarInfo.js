import React, { Component } from 'react';
import { connect } from 'react-redux';


class SidebarInfo extends Component {
  render() {
    const { title, desc, cost } = this.props.toggles.item;

    return (
      <div className='sidebar-info'>
        <span className='sidebar-info__text sidebar-info__text--title'>{title}</span>
        <span className='sidebar-info__text'>{desc}</span>
        <span className='sidebar-info__text sidebar-info__text--cost'>
          { cost.length > 0 &&
            `Cost: ${cost}`
          }
        </span>
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ toggles }) => {
  return { toggles };
};

export default connect(mapStateToProps)(SidebarInfo);
