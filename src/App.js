import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';


import banner1 from './banner1.webp';
import banner2 from './banner2.webp';
import Newsletter from './Newsletter';
import Trending from './Trending';
import Fitness from './Fitness';
import Weight from './Weight';
import Follow from './Follow';
import MightLike from './MightLike';
import Footer from './Footer';
import Tags from './Tags';
import Carousel from './Carousel';
import CarouselSide from './CarouselSide';
import FitnessNav from './FitnessNav';
import EatingNav from './EatingNav';
import WeightNav from './WeightNav';
import WellnessNav from './WellnessNav';
import HealthyNav from './HealthyNav';
import BehindNav from './BehindNav';
import EngineeringNav from './EngineeringNav';
import MindNav from './MindNav';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fitness' element={<FitnessNav />} />
        <Route path='/weightloss' element={<WeightNav />} />
        <Route path='/healthyeating' element={<EatingNav />} />
        <Route path='/healthymind' element={<HealthyNav />} />
        <Route path='/wellness' element={<WellnessNav />} />
        <Route path='/behindscenes' element={<BehindNav />} />
        <Route path='/healthyeating' element={<HealthyNav />} />
        <Route path='/engineering' element={<EngineeringNav />} />
      </Routes>

      
      {/* <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={banner1} alt="" />
      <div className='flex'>
        <Carousel></Carousel>
        <CarouselSide></CarouselSide>
      </div>
      <img className='flex mx-auto my-6 w-11/12 rounded-lg cursor-pointer' src={banner2} alt="" />
      <Newsletter></Newsletter>
      <Trending></Trending>
      <Fitness></Fitness>
      <Weight></Weight>
      <MightLike></MightLike>
      <Follow></Follow>
      <Footer></Footer>
 */}







      {/* <Router> */}
      {/* <Navbar></Navbar>
        <hr /> */}

      {/* <Routes>
          <Route path="/"><Home></Home></Route>
        </Routes> */}

      {/* <EngineeringNav></EngineeringNav> */}
      {/* <BehindNav></BehindNav> */}
      {/* <HealthyNav></HealthyNav> */}
      {/* <WellnessNav></WellnessNav> */}
      {/* <WeightNav></WeightNav> */}
      {/* <EatingNav></EatingNav> */}
      {/* <FitnessNav></FitnessNav> */}
      {/* <img className='flex mx-auto my-6 w-11/12 rounded-lg' src={banner1} alt="" /> */}
      {/* <div className='flex'>
    <Carousel></Carousel>
    <CarouselSide></CarouselSide>
    </div> */}
      {/* <img className='flex mx-auto my-6 w-11/12 rounded-lg cursor-pointer' src={banner2} alt="" />     */}
      {/* <Newsletter></Newsletter> */}
      {/* <Trending></Trending> */}
      {/* <Fitness></Fitness>
    <Weight></Weight> */}
      {/* <MightLike></MightLike>
        <Follow></Follow>
        <Footer></Footer> */}
      {/* </Router> */}
    </>
  );
}

export default App;
