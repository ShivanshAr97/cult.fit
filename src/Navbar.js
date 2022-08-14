import React from 'react'
import logo from './logo.png';

const Navbar = () => {
    return (
        <>        
            <nav className='sticky bg-white top-0 z-50 border-b'>
                <div className='flex justify-between'>
                    <div className='flex cursor-pointer hover:text-num1'>
                        <img className='my-5 ml-6 mr-3 w-10 h-10' src={logo} alt="" />
                        <div>
                        <p className='my-4 font-inter font-extrabold '>The .fit <br /> Way</p>
                        </div>
                    </div>
                    <ul className='flex mx-10'>
                        <li className='ml-6 mr-2 my-6 px-3 py-2 rounded-md text-sm font-semibold cursor-pointer hover:text-num1 hover:bg-red-50'>Fitness</li>
                        <li className='mx-2 my-6 px-3 py-2 rounded-md text-sm font-semibold cursor-pointer hover:text-num1 hover:bg-red-50'>Healthy Eating</li>
                        <li className='mx-2 my-6 px-3 py-2 rounded-md text-sm font-semibold cursor-pointer hover:text-num1 hover:bg-red-50'>Weight Loss</li>
                        <li className='mx-2 my-6 px-3 py-2 rounded-md text-sm font-semibold cursor-pointer hover:text-num1 hover:bg-red-50'>Wellness</li>
                        <li className='mx-2 my-6 px-3 py-2 rounded-md text-sm font-semibold cursor-pointer hover:text-num1 hover:bg-red-50'>Healthy Mind</li>
                        <li className='mx-2 my-6 px-3 py-2 rounded-md text-sm font-semibold cursor-pointer hover:text-num1 hover:bg-red-50'>Behind the Scenes</li>
                        <li className='mx-2 my-6 px-3 py-2 rounded-md text-sm font-semibold cursor-pointer hover:text-num1 hover:bg-red-50'>Engineering</li>
                    </ul>
                    <div className='flex'>
                        <button className="btn my-6 mx-2 px-3 py-1 border rounded-md "><i class="fa-solid fa-magnifying-glass"></i></button>
                        <button className="btn flex text-white font-bold rounded-lg bg-num1 px-5 py-2 mr-6 my-6 text-sm"><i class="my-1 fa-solid fa-envelope"></i> &nbsp; Subscribe</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar