import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  category: PropTypes.string.isRequired,
};

const PlayerStat = ({ category }) => {
  return (
    <li className='player-summary__item'>
      <span className='player-summary__category'>{category}:</span>
      <span className='player-summary__stat'></span>
    </li>
  )
};

PlayerStat.propTypes = propTypes;

export default PlayerStat;