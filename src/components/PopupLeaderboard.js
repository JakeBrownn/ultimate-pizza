import React, { Component } from 'react';
import { connect } from 'react-redux';


class PopupLeaderboard extends Component {
  render() {
    const { leaderboard } = this.props.toggles;
    
    return (
      <div className={`leaderboard leaderboard--${leaderboard}`} >
        <div className='leaderboard__wrapper'>
          <h2 className='leaderboard__title'>Total Score Ranking</h2>
          <ul className='leaderboard-list'>
            <li className='leaderboard-list__entry'>
              <span className='leaderboard-list__username'>EPIC_FAILlZz</span>
              <span className='leaderboard-list__score'>37056</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ toggles }) => {
  return { toggles };
};

export default connect(mapStateToProps)(PopupLeaderboard);
