import React, { Component } from 'react';
import { connect } from 'react-redux';


class SidebarInfo extends Component {
  render() {
    const { item } = this.props.toggles;

    return (
      <div className='sidebar-info'>
        <span className='sidebar-info__text sidebar-info__text--title'>{item.title}</span>
        <span className='sidebar-info__text'>{item.desc}</span>
        <span className='sidebar-info__text sidebar-info__text--cost'>
          {item.cost.length > 0 &&
            `Cost: ${item.cost}`
          }
        </span>
      </div>
    );
  }
};

const mapStateToProps = ({ toggles }) => {
  return { toggles };
}

export default connect(mapStateToProps)(SidebarInfo);