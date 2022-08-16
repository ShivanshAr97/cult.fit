import React from 'react'
import banner6 from './banner6.jpg';
import Follow from './Follow';
import Footer from './Footer';
import MightLike from './MightLike';
import Newsletter from './Newsletter';
import Trending from './Trending';

const FitnessNav = () => {
  return (
    <>
    <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={banner6} alt="" />
    <p className='text-xs mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Wellness</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62331fee1e72d66166405034_FirstElectricToothbrush_1300x860.jpg" alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </>

  )
}

export default FitnessNav