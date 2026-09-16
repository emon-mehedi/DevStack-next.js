import React from 'react';
import { brandGradient } from '../page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | DevStack",
  description: "...",
};

const Contact = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center h-100 mt-10'>
      <h1 className={`text-4xl mb-5 ${brandGradient} bg-clip-text text-transparent`}>Contact Us</h1>
      <p>If you need any help, feel free to contact:</p>
      <p className='my-5'>Road-2, House-5 <br></br>Mohakhali, Dhaka-1219<br></br>Mob: 01740141123</p>
    </div>
  );
};

export default Contact;