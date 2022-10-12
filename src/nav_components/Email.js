import React from 'react'
import { Link } from "react-router-dom"

const Email = () => {
  return (
    <>
      <div id='mail' className='flex justify-center bg-gray-200 p-8 rounded-lg'>
        <img className='w-1/4 rounded-tl-lg rounded-bl-lg' src="https://global-uploads.webflow.com/5fe33d02bcae60657c07a6a9/618e539ba1c7ab5d0e585e0d_Blog%20subscribe%20creative.webp" alt="" />
        <div className=' w-1/2'>
          <p className='absolute right-60 text-gray-500/40 cursor-pointer'><Link to="/"><i class="fa-solid fa-xl fa-xmark"></i></Link></p>
          <div className=' bg-white px-12 py-28 w-11/12 rounded-br-lg rounded-tr-lg'>
            <p className='text-center'>📬</p>
            <p className='font-bold text-2xl text-center'>Get The .fit Way Newsletter</p>
            <p className='text-sm py-4 text-gray-500 text-center font-semibold'>Make health & fitness your top priority with tips on workouts, healthy eating, <br /> wellness and more, straight from the experts.</p>
            <div className='text-center'>
              <input className='border text-sm py-3 px-7 bg-num2 duration-300 rounded-lg hover:bg-white' type="text" name="" id="" placeholder='Email Address' />
              <button className="btn text-white font-bold rounded-lg bg-num1 px-5 py-3 mx-4 text-sm hover:bg-red-500">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Email