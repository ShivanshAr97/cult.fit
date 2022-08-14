import React from 'react'
import logo from "./logo.png"
import apple from "./apple.svg"
import google from "./googleplay.svg"

const Footer = () => {
  return (
    <>
    <div className='flex mx-12 my-16 justify-between'>
    <div className='flex w-1/3 flex-col'>
        <div className='flex'>
            <img className='w-10 mr-2' src={logo} alt="" />
            <p className=' text-lg my-1 font-bold'>The .fit Way</p>
        </div>
        <div>
            <p className='my-4 text-gray-500'>At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, and medical & lifestyle care hassle-free. #BeBetterEveryDay</p>
        </div>
        <img className='w-2/5 my-2 text-gray-500' src={apple} alt="" />
        <img className='w-2/5 my-2 text-gray-500' src={google} alt="" />
    </div>

    <div className='flex w-1/4 flex-col'>
        <div className='flex'>
            <p className=' text-lg my-1 font-bold'>Categories</p>
        </div>
        <div className='my-8'>
            <p className='border-y cursor-pointer font-semibold p-4 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Fitness</p>
            <p className='border-y cursor-pointer font-semibold p-4 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Healthy Eating</p>
            <p className='border-y cursor-pointer font-semibold p-4 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Weight Loss</p>
            <p className='border-y cursor-pointer font-semibold p-4 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Wellness</p>
            <p className='border-y cursor-pointer font-semibold p-4 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Healthy Mind</p>
            <p className='border-y cursor-pointer font-semibold p-4 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Behind the scenes</p>
            <p className='border-y cursor-pointer font-semibold p-4 hover:translate-x-4 ease-linear duration-200 hover:bg-num2'>Engineering</p>
        </div>
    </div>

    <div className='flex w-1/4 flex-col'>
        <div className='flex'>
            <p className=' text-lg my-1 font-bold'>Newsletter</p>
        </div>
        <div>
            <p className='my-8 text-gray-500'>📬 Join 1000+ subscribers and get new stories straight to your inbox</p>
            <div>
                    <input className='border text-sm py-3 px-7 mb-4 bg-num2 rounded-lg w-full hover:bg-white' type="text" name="" id="" placeholder='Email Address' />
                    <button className="btn text-white font-bold rounded-lg bg-num1 w-full px-5 py-3 my-2 text-sm">Subscribe</button>
                </div>
        </div>
        <p className='font-semibold'>Fitness Glossary</p>
    </div>
    </div>
    </>
  )
}

export default Footer