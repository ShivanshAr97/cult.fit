import React from 'react'

const Trending = () => {
    return (
        <>
            <div className='mx-4'>
                <h1 className='border-b w-auto text-2xl font-bold rounded-sm mx-10 my-3 py-5'>Weight Loss</h1>
                <div className='flex mx-4'>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62a9a67a0ffd93752cff6fe8_BoxingForWeightLoss_32.jpg" alt="" />
                        <h2 className='mx-4 font-bold  hover:underline'>Punch The Fat Away! - Fitness Boxing For Weight Loss</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 15 Jun, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 7 min read</p>
                    </div>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/628ced55da81d8f1fdf8af80_ORAAT_20.jpg" alt="" />
                        <h2 className='mx-4 font-bold  hover:underline'>Lose Weight - One Rep At A Time</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                    </div>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/625427506f62da000c3b130d_Yoga-for-Weight-%26-Fat-Loss_10.jpg" alt="" />
                        <h2 className='mx-4 font-bold hover:underline'>Yoga For Weight & Fat Loss - The Ultimate Guide</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 11 Apr, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 6 min read</p>
                    </div>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61f775c88286b05a9be92c05_WaterWeight_1200x800.jpg" alt="" />
                        <h2 className='mx-4 font-bold hover:underline'>The H-To-O Of Water Weight: Everything You Need To Know</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 2 Aug, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 4 min read</p>
                    </div>

                </div>
                <div className='flex justify-end mx-8 cursor-pointer hover:text-num1'>
                    <p className='text-xs py-1'>VIEW ALL</p>
                    <button className="btn text-sm border px-2 mx-1 rounded-sm hover:text-white hover:bg-num1"><i class="fa-solid fa-2xs fa-chevron-right"></i></button>
                </div>
            </div>

        </>
    )
}

export default Trending