import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLeaderboardData } from '../actions';

import LoadingSpinner from '../assets/images/loading-spinner.svg';


class PopupLeaderboard extends Component {
  componentDidMount() {
    this.props.fetchLeaderboardData();
  }

  renderLeaderboardContent() {
    const { leaderboardData } = this.props.form;

    // Loop over leaderboardData
    const leaderboardEntry = leaderboardData.map((item, i) => {
      let playerPos = i + 1;

      // Prepend '0' if Rank is less than 10
      if (i < 10) {
        playerPos = `0${i + 1}`;
      }

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
    return <img className='leaderboard__loading-image' src={LoadingSpinner} alt='Loading' />
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

export default connect(mapStateToProps, {fetchLeaderboardData})(PopupLeaderboard);
