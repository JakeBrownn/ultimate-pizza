import React from 'react';

import LoadingImage from '../assets/images/loading-spinner.svg';

const LoadingSpinner = () => {
  return (
    <div className='loading-spinner'>
      <img className='loading-spinner__image' src={LoadingImage} alt='Loading...' />
    </div>
  );
};

export default LoadingSpinner;
