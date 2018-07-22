import React from 'react';

import LoadingImage from '../assets/images/loading-spinner.svg';

const LoadingSpinner = () => {
  return (
    <img className='loading-spinner' src={LoadingImage} alt='Loading...' />
  );
};

export default LoadingSpinner;
