import React from 'react'
import logo from '../images/logo.png';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className='sticky bg-white top-0 z-50 border-b'>
                <div className='flex justify-between mx-4'>
                    <div className='flex cursor-pointer hover:text-num1'>
                        <Link to="/"><img className='w-12 m-4' src={logo} alt="" /></Link>
                        <div>
                            <Link to="/"><p className='w-32 font-bold text-xl mx-8 my-4'>The .fit Way</p></Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>
                            <button className="btn text-white rounded-lg bg-num1 text-sm px-4 py-3 mx-4"> <Link to="/email"><i class="fa-solid fa-envelope"></i></Link></button>
                        </div>
                        <i class="mx-2 fa-xl fa-solid fa-bars"></i>
                    </div>
{/* 
                    <ul className='flex mx-10'>
                        <li className='' ><Link to="/fitness">Fitness</Link></li>
                        <li className=''><Link to="/healthyeating">Healthy Eating</Link></li>
                        <li className=''><Link to="/weightloss">Weight Loss</Link></li>
                        <li className=''><Link to="/wellness">Wellness</Link></li>
                        <li className=''><Link to="/healthymind">Healthy Mind</Link></li>
                        <li className=''><Link to="/behindscenes">Behind the Scenes</Link></li>
                        <li className=''><Link to="/engineering">Engineering</Link></li>
                    </ul>
                    <div className='flex'>
                        <button className=""><i class="fa-solid fa-magnifying-glass"></i></button>
                        <button className=""> <Link to="/email"><i class="fa-solid fa-envelope"></i> &nbsp; Subscribe</Link></button>
                    </div> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar