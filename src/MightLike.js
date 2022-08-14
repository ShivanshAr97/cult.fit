import React from 'react'

const MightLike = () => {
    return (
        <>
            <div className='mx-4'>
                <h1 className='border-b w-auto text-2xl font-bold rounded-sm mx-8 my-4 py-5'>You might also like</h1>
                <div className='my-12'>
                    <div className='my-8 flex w-2/3'>
                        <img className='ml-4 mr-12 h-52 w-72 rounded-lg cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61f775c88286b05a9be92c05_WaterWeight_1200x800.jpg" alt="" />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-2xl my-2 cursor:pointer hover:underline'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                            <p className='text-gray-400 my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis delectus rem labore dolorum magnam debitis, laboriosam asperiores facilis vel excepturi.</p>
                            <p className='my-2 text-gray-400 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                        </div>
                    </div>
                    <div className='my-8 flex w-2/3'>
                        <img className='ml-4 mr-12 h-52 w-72 rounded-lg cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61ee37eba8105364ebc92192_DineOutHealthy_1200x800-min%20(1).jpg" alt="" />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-2xl my-2 cursor-pointer hover:underline'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                            <p className='text-gray-400 my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis delectus rem labore dolorum magnam debitis, laboriosam asperiores facilis vel excepturi.</p>
                            <p className='my-2 text-gray-400 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                        </div>
                    </div>
                    <div className='my-8 flex w-2/3'>
                        <img className='ml-4 mr-12 h-52 w-72 rounded-lg cursor-pointer hover:scale-110 translate-x-4 ease-in duration-300' src="https://global-uploads.webflow.com/5fe33d036237252135e3e74d/61f75a625cedec45b40d815d_BeginnersGuideToYoga_1200x800%20-min.jpg" alt="" />
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-2xl my-2 cursor-pointer hover:underline'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                            <p className='text-gray-400 my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis delectus rem labore dolorum magnam debitis, laboriosam asperiores facilis vel excepturi.</p>
                            <p className='my-2 text-gray-400 text-xs spacing-2'><i class="fa-solid fa-calendar"></i>&nbsp; 24 May, 2022 &nbsp; &nbsp; | &nbsp; &nbsp; <i class="fa-solid fa-clock"></i>&nbsp; 5 min read</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default MightLike