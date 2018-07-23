import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingSpinner from './LoadingSpinner';

import { fetchLeaderboardData, setLeaderboardPos } from '../actions';

import IconArrowDown from '../assets/images/icon-arrow-down.png';


class PopupLeaderboard extends Component {
  componentDidMount() {
    this.props.fetchLeaderboardData();
  }

  renderLeaderboardContent() {
    const { leaderboardData } = this.props.form;

    // Loop over leaderboardData
    const leaderboardEntry = leaderboardData.map((item, i) => {
      let playerPos = i + 1;

      // Prepend '0' if Player Rank is less than 10
      (i < 9) && (playerPos = `0${i + 1}`);

      return (
        <li className='leaderboard-list__entry' key={i}>
          <span className='leaderboard-list__rank'>{playerPos}</span>
          <span className='leaderboard-list__username'>{item.username}</span>
          <span className='leaderboard-list__score'>{item.score}</span>
        </li>
      )
    });

    // If leaderboardData is not empty
    if (leaderboardData.length > 0) {
      return (
        <React.Fragment>
          {/* <div className='scroll-down'>
            <div className='scroll-down__wrapper'>
              <span className='scroll-down__text'>Scroll Down</span>
              <img className='scroll-down__image' src={IconArrowDown} alt='Arrow' />
            </div>
          </div>  */}
          <div className='leaderboard__categories'>
            <span className='leaderboard__category leaderboard__category--rank'>Rank</span>
            <span className='leaderboard__category leaderboard__category--username'>Username</span>
            <span className='leaderboard__category leaderboard__category--score'>Score</span>
          </div>
          <ul className='leaderboard-list'>
            {leaderboardEntry}
          </ul>
        </React.Fragment>
      );
    } 

    // Display loading spinner by default
    return <LoadingSpinner />

  }

  render() {    
    return (
      <div className='leaderboard'>
        <div className='leaderboard__wrapper'>
          <h2 className='title title--popup'>The Leaderboards</h2>
          {this.renderLeaderboardContent()}
        </div>
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps, {
  fetchLeaderboardData,
  setLeaderboardPos
})(PopupLeaderboard);
