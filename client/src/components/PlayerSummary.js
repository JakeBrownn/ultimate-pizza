import React, { Component } from 'react';
import PlayerStat from './PlayerStat';

class PlayerSummary extends Component {
  render() {
    return (
      <div className='player-summary'>
        <ul className='player-summary__stats'>
          <PlayerStat category='Total Slices Earned' />
          <PlayerStat category='Leaderboard Position' />
          <PlayerStat category='Total Time Played' />
        </ul>
      </div>
    )
  }
}; 

export default PlayerSummary;
