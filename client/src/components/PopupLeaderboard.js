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
    const innerWrapper = 'leaderboard__wrapper';
    const leaderboardEntry = leaderboardData.map((item, i) => {
      return (
        <li className='leaderboard-list__entry' key={i}>
          <span className='leaderboard-list__position'>{i + 1}</span>
          <span className='leaderboard-list__username'>{item.username}</span>
          <span className='leaderboard-list__score'>{item.score}</span>
        </li>
      )
    });

    if (leaderboardData.length > 0) {
      return (
        <div className={innerWrapper}>
          <h2 className='title title--popup'>The Leaderboards</h2>
          <div className='leaderboard__categories'>
            <span className='leaderboard__category'>Rank</span>
            <span className='leaderboard__category'>Username</span>
            <span className='leaderboard__category'>Score</span>
          </div>
          <ul className='leaderboard-list'>
            {leaderboardEntry}
          </ul>
        </div>
      );
    } 

    return (
      <div className={innerWrapper}>
        <img className='leaderboard__loading-image' src={LoadingSpinner} alt='Loading' />
      </div>
    );
  }

  render() {    
    return (
      <div className='leaderboard'>
        {this.renderLeaderboardContent()}
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps, {fetchLeaderboardData})(PopupLeaderboard);
