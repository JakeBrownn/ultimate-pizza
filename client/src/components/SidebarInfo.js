import React, { Component } from 'react';
import { connect } from 'react-redux';

class SidebarInfo extends Component {
  renderContent() {
    const { title, desc, cost } = this.props.toggles.item;
    const { infoUnlocked } = this.props.purchased;
    const titleClassName = 'sidebar-info__text sidebar-info__text--title';
    const textClassName = 'sidebar-info__text';
    const costClassName = `${textClassName} ${textClassName}--cost`;
    const unavClassName = `${textClassName}--na`;

    // Check length of the item title
    // this will prevent the '???' from always showing
    if (title.length > 0) {

      // Show '???'s if the item title is not in the infoUnlocked array
      if (!infoUnlocked.includes(title)) {        
        return (
          <React.Fragment>
            <span className={`${titleClassName} ${unavClassName}`}>????? ?????????</span>
            <span className={`${textClassName} ${unavClassName}`}>???? ????? ?? ?????? ???? ??? ???????</span>
            <span className={`${costClassName} ${unavClassName}`}><p>Cost:</p> ???</span>
          </React.Fragment>
        );
      }
  
      // Show item details
      return (
        <React.Fragment>
          <p className={titleClassName}>{title}</p>
          <p className={textClassName}>{desc}</p>
          <p className={costClassName}>{`Cost: ${cost}`}</p>
        </React.Fragment>
      );
    }
   }

  render() {
    return (
      <div className='sidebar-info'>
        {this.renderContent()}
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ counter, toggles, purchased }) => {
  return { counter, toggles, purchased };
};

export default connect(mapStateToProps)(SidebarInfo);
