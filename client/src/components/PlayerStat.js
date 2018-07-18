import React from 'react';

const PlayerStat = ({ category, stat }) => {
  return (
    <li className='player-summary__item'>
      <span className='player-summary__category'>{category}:</span>
      <span className='player-summary__stat'></span>
    </li>
  )
};

export default PlayerStat;