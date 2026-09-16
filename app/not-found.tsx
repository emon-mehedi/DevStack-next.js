import React from 'react';
import { brandGradient } from './page';

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-100'>
      <h2 className={`text-4xl ${brandGradient} bg-clip-text text-transparent`}>No information found. This page does not exist!</h2>
    </div>
  );
};

export default NotFound;