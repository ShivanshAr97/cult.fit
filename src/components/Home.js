import React from 'react'
import banner1 from '../banner/banner1.webp';
import banner2 from '../banner/banner2.webp';
import Newsletter from './Newsletter';
import Trending from './Trending';
import Fitness from './Fitness';
import Weight from './Weight';
import Follow from './Follow';
import MightLike from './MightLike';
import Footer from './Footer';
import Carousel from './Carousel';
import CarouselSide from './CarouselSide';
import NewBlog from './NewBlog';

const Home = () => {
    return (
        <>
            <img className='flex rounded-lg my-4 mx-8' src="https://global-uploads.webflow.com/5fe33d02bcae60657c07a6a9/61a5b68d2fd41728419395fd_The.fitBlog-Banner-mobile.webp" alt="" />
                <Carousel></Carousel>
                <CarouselSide></CarouselSide>
            <img className='flex mx-auto my-6 w-11/12 rounded-lg cursor-pointer' src={banner2} alt="" />
            <Newsletter></Newsletter>
            <Trending></Trending>
            <Fitness></Fitness>
            <Weight></Weight>
            <Follow></Follow>
            <MightLike></MightLike>
            
            <Footer></Footer>
        </>
    )
}

export default Home