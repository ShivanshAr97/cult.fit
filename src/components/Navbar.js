import React from 'react'
import logo from '../images/logo.png';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <>        
            <nav className='sticky bg-white top-0 z-50 border-b'>
                <div className='flex justify-between'>
                    <div className='flex cursor-pointer hover:text-num1'>
                    <Link to="/"><img className='my-5 ml-6 mr-3 w-10 h-10' src={logo} alt="" /></Link>
                        <div>
                        <Link to="/"><p className='mt-7 font-inter font-bold '>The .fit Way</p></Link>
                        </div>
                    </div>
                    
                    <ul className='flex mx-10'>
                        <li className='ml-8 mr-2 mt-6 my-4 px-2 py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50'><Link to="/fitness">Fitness</Link></li>
                        <li className='mx-2 mt-6 my-4 px-2 py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50'><Link to="/healthyeating">Healthy Eating</Link></li>
                        <li className='mx-2 mt-6 my-4 px-2 py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50'><Link to="/weightloss">Weight Loss</Link></li>
                        <li className='mx-2 mt-6 my-4 px-2 py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50'><Link to="/wellness">Wellness</Link></li>
                        <li className='mx-2 mt-6 my-4 px-2 py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50'><Link to="/healthymind">Healthy Mind</Link></li>
                        <li className='mx-2 mt-6 px-2 my-4 py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50'><Link to="/behindscenes">Behind the Scenes</Link></li>
                        <li className='mx-2 mt-6 px-2 my-4 py-3 rounded-md text-sm font-bold cursor-pointer hover:text-num1 hover:bg-red-50'><Link to="/engineering">Engineering</Link></li>
                    </ul>
                    <div className='flex'>
                        <button className="btn my-6 mr-2 px-3 py-1 border rounded-md "><i class="fa-solid fa-magnifying-glass"></i></button>
                        <button className="btn flex text-white font-bold rounded-lg bg-num1 px-5 py-2 mr-6 my-6 text-sm"><i class="my-1 fa-solid fa-envelope"></i> &nbsp; Subscribe</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar