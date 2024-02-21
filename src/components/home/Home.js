import React from 'react';
import "./Home.css";
import UserImg from "../../assets/Main-Sky.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Typed from 'typed.js';
import { useEffect, useRef } from "react";

export default function Home() {

  const el = useRef(null);
   
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [ "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Data Structure ",
      "Android Developer",
      "Coder",], // Strings to display
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <section className='home container' id='home'>
      {/* <button className='toggle-btn' >Toggle</button> */}
        <div className='intro' >
            <img src={UserImg} alt='' className='home__img' />
            <h1 className='home__name' > Vivek Chaudhary </h1>
            <span className='home__education' ref={el} ></span>

            <HeaderSocials/>

            <a href = "mailto:venerablevivekchaudhary@gmail.com?subject = Hiring Opportunity&body = Message" className='btn' target='_blank' rel='noreferrer' >Hire Me</a>

            <ScrollDown/>
        </div>
        <Shapes/>
      </section>
    </div>
  );
}