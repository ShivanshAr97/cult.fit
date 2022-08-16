import React from 'react'
import banner9 from './banner9.jpg';
import Follow from './Follow';
import Footer from './Footer';
import MightLike from './MightLike';
import Newsletter from './Newsletter';
import Trending from './Trending';

const EngineeringNav = () => {
  return (
    <>
    <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={banner9} alt="" />
    <p className='text-xs mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Engineering</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/6256f3e17e3d26af26811225_Load%20Testing2.jpg" alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </>
  )
}

export default EngineeringNav