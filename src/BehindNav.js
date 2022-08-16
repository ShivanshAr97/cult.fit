import React from 'react'
import banner8 from './banner8.jpg';

const FitnessNav = () => {
  return (
    <>
    <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={banner8} alt="" />
    <p className='text-xs mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Behind the scenes</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61a5c5bd8fd76219dff5e445_1300x860.jpg" alt="" />
    </>
  )
}

export default FitnessNav