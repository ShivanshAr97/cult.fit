import React from 'react'
import banner7 from './banner7.jpg';

const FitnessNav = () => {
  return (
    <>
    <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={banner7} alt="" />
    <p className='text-xs mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Healthy Mind</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61f77677a848e84a1e8d7d70_Burnout_1300x860%20.jpg" alt="" />
    </>
  )
}

export default FitnessNav