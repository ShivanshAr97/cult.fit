import React from 'react'

const Trending = () => {
    return (
        <>
            <div className='mx-4'>
                <h1 className='border-b w-auto text-2xl font-bold rounded-sm mx-8 my-3 py-5'>Fitness</h1>
                <p className='mx-8 -mt-4 border-b-2 border-black w-16'></p>
                <div className='flex mx-4 mt-4'>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62f38b5ed4e304a2b7a6dcc8_stamina1200.jpg" alt="" />
                        <h2 className='mx-4 font-bold hover:underline'>What Is Stamina And How To Increase Yours</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 10 Aug, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 6 min read</p>
                    </div>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62eb8c68a5e632161e23208e_Kidfitness1200.jpg" alt="" />
                        <h2 className='mx-4 font-bold hover:underline'>Start ‘Em Young: Why Fitness Should Be Part Of Your Child’s Life</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 4 Aug, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 8 min read</p>
                    </div>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62e7cc0a4b73ee5ae0fe31c0_hangover1b.jpg" alt="" />
                        <h2 className='mx-4 font-bold hover:underline'>Beat Hangover With These 6 Easy Exercises</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 1 Aug, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                    </div>
                    <div className='w-11/12'>
                        <img className='rounded-lg w-11/12 my-6 cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/62cd06f08961531a2bfd2f39_1200800.jpg" alt="" />
                        <h2 className='mx-4 font-bold hover:underline'>Toning, Flexibility, And Strength⁠— Can Yoga Do It All?</h2>
                        <p className='m-4 text-gray-500 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 13 Jul, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 4 min read</p>
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