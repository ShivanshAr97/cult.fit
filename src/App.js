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
import Blog from './components/Blog';
import Email from './nav_components/Email';

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
        <Route path='/blog' element={<Blog/>} />
        <Route path='/email' element={<Email/>} />
      </Routes>
    </>
  );
}

export default App;
