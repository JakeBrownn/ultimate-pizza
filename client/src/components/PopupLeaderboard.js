import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLeaderboardData } from '../actions';

import LoadingSpinner from '../assets/images/loading-spinner.svg';


class PopupLeaderboard extends Component {
  componentDidMount() {
    this.props.fetchLeaderboardData();
  }

  renderLeaderboardContent() {
    const { fetchingData, dataFetched } = this.props.form;
    const innerWrapper = 'leaderboard__wrapper';

    switch(true) {

      // Whilst waiting for Leaderboard data to fetch
      case fetchingData:
        return (
          <div className={innerWrapper}>
            <img className='leaderboard__loading-image' src={LoadingSpinner} alt='Loading' />
          </div>
        );

      // Once Leaderboard data has been loaded
      case dataFetched:
        return (
          <div className={innerWrapper}>
            yes!
          </div>
        );

      // Display error
      default:
        return (
          <div className={innerWrapper}>
            <p className='leaderboard__text'>Sorry, this isn't working.</p>
          </div>
        );
    }
  }

  render() {    
    console.log(this.props.form.leaderboardData)

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
