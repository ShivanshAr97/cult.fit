import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import FitnessNav from './nav_components/FitnessNav';
import EatingNav from './nav_components/EatingNav';
import WeightNav from './nav_components/WeightNav';
import WellnessNav from './nav_components/WellnessNav';
import HealthyNav from './nav_components/HealthyNav';
import BehindNav from './nav_components/BehindNav';
import EngineeringNav from './nav_components/EngineeringNav';
import NewBlog from './components/NewBlog';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <NewBlog></NewBlog>
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
