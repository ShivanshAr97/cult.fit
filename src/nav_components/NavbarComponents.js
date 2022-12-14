import React from 'react'

import Follow from '../components/Follow';
import Footer from '../components/Footer';
import MightLike from '../components/MightLike';
import Newsletter from '../components/Newsletter';
import Trending from '../components/Trending';

const NavbarComponents = (props) => {
  return (
    <>
    <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={props.img1} alt="" />
    <p className='text-xs mx-16 my-2'><span className='cursor-pointer hover:underline'>Home</span><span className='text-gray-500'> / Categories / {props.category}</span></p>
    <img className='mx-12 w-11/12 rounded-lg' src={props.img2} alt="" />
    <Newsletter></Newsletter>
    <Trending></Trending>
    <MightLike></MightLike>
    <Follow></Follow>
    <Footer></Footer>
    </>
  )
}

export default NavbarComponents