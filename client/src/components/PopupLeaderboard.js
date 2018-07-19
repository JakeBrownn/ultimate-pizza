import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoadingSpinner from '../assets/images/loading-spinner.svg';


class PopupLeaderboard extends Component {
  componentDidMount() {
    console.log(123)
  }

  renderLeaderboardContent() {
    const { fetchingData, leaderboardData } = this.props.form;
    const innerWrapper = 'leaderboard__wrapper';

    switch(true) {

      // Whilst waiting for Leaderboard data to fetch
      case fetchingData:
        return (
          <div className={innerWrapper}>
            <img className='leaderboard__loading-image' src={LoadingSpinner} alt='Loading' />
          </div>
        );

      // Once Leaderbaord data has been loaded
      case leaderboardData:
        return (
          <div className={innerWrapper}>

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
    return (
      <div className='leaderboard'>
        
      </div>
    );
  }
};

// Map State from Store into Props
const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps)(PopupLeaderboard);
