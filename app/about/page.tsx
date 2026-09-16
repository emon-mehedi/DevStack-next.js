import React from 'react';
import { brandGradient } from '../page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | DevStack",
  description: "...",
};


const About = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center h-100 mt-10'>
      <h1 className={`text-4xl mb-5 ${brandGradient} bg-clip-text text-transparent`}>About US</h1>
      <p>We are the boss tech company</p>
      <p className='w-100 my-5'>We started back in 1994, working through decades of adventures with success. We intend to flourish further with your contribution. Be a part of our journey and help us go beyond our goal. The sky is the limit who wills it.</p>
    </div>
  );
};

export default About;