import React from 'react'
import banner3 from './banner3.jpg';
import Follow from './Follow';
import Footer from './Footer';
import MightLike from './MightLike';
import Newsletter from './Newsletter';
import Trending from './Trending';

const FitnessNav = () => {
  return (
    <>
    <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={banner3} alt="" />
    <p className='text-xs mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / Fitness</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62f38b5ed4e304a2b7a6dcc8_stamina1200.jpg" alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </>
  )
}

export default FitnessNav