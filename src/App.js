import './App.css';
import Sidebar from "./components/sidebar/Sidebar";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import Contact from './components/contact/Contact';
import Skill from './components/skills/Skill';
// import Testimonials from "./components/testimonials/Testimonials";
// import Pricing from "./components/pricing/Pricing";
// import { useState } from 'react';

function App() {
  return (
    <div className='wrapper' >
      <div className='child-wrapper'>
          <Sidebar />
      </div>
          <main className='main' >
            <Home/>
            <About/>
            <Services/>
            <Skill/>
            <Resume/>
            <Portfolio/>
            {/* <Pricing/> */}
            {/* <Testimonials/> */}
            <Blog/>
            <Contact/>
          </main>
    </div>
  );
}

export default App;
