import React from 'react';
import { brandGradient } from '../page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | DevStack",
  description: "...",
};

const Projects = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center h-100 mt-10'>
      <h1 className={`text-4xl mb-5 ${brandGradient} bg-clip-text text-transparent`}>Projects</h1>
      <p>Projects are coming soon.</p>
      <p className='my-5'>Stay tuned.</p>
    </div>
  );
};

export default Projects;