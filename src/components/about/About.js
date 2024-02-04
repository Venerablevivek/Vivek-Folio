import React from 'react';
import "./About.css";
import AboutImg from "../../assets/about-main.png";
import AboutBox from './AboutBox';
import Resume from '../../assets/Resume.pdf';

const About = () => {
  return (
    <div>
      <section className='about container section' id='about' >
      <h2 className='section__title' >About Me</h2>

      <div className='about__container grid' >
        <img src={AboutImg} alt='' className='about__img' />

        <div className='about__data grid' >
          <div className='about__info' >
            <p className='about__description' >
            Hello, I am Software Developer and a Computer Science undergraduate from AKTU.
            </p>
            <p>
            <ul>
              <li><span className=' text-green ' >✔</span> Self-taught Programmer currently in web development and competitive programming.</li>
              <li><span className=' text-green ' >✔</span> Strong fundamentals in web-dev frameworks as M.E.R.N. and tailwind CSS etc.</li>
              <li><span className=' text-green ' >✔</span> Creative Problem-Solving enthusiast with a constantly growing love for tackling new problems.</li>
              <li><span className=' text-green ' >✔</span> Passionate to explore things in the field of Computer Technology and programming.</li>
              <li><span className=' text-green ' >✔</span> Keen learner having good fundamentals in Data Structure and Algorithms.</li>
              <li><span className=' text-green ' >✔</span> Currently Solved 600+ DSA problems across platforms like Leetcode, GeeksForGeeks, etc.</li>
              <li><span className=' text-green ' >✔</span> Secured AIR-885 from 1Lakh+ participants in Codekaze 2023 at Coding Ninjas</li>
              <li><span className=' text-green ' >✔</span> Have Participated in SSOC 2023</li>
              <li><span className=' text-green ' >✔</span> Secured 8348 in Google Kickstart 2021</li>
              <li><span className=' text-green ' >✔</span> I'm currently exploring React.js and some advanced CS algorithms.</li>
            </ul>
            </p>
            <a className='btn btn-download' href={Resume} target='_blank' rel='noreferrer' >Download CV</a>
          </div>

          <div className='about__skills grid' >
            <div className='skills__data' >
              <div className='skills__titles' >
               <h3 className='skills__name' >Web Development</h3>
               <span className='skills_number ' >90%</span>
              </div>

              <div className='skills__bar' >
                  <span className='skills__percentage development' ></span>
              </div>
            </div>
          </div>

          <div className='about__skills grid' >
            <div className='skills__data' >
              <div className='skills__titles' >
               <h3 className='skills__name' >Problem Solving</h3>
               <span className='skills_number ' >80%</span>
              </div>

              <div className='skills__bar' >
                  <span className='skills__percentage ui__design' ></span>
              </div>
            </div>
          </div>

          <div className='about__skills grid' >
            <div className='skills__data' >
              <div className='skills__titles' >
               <h3 className='skills__name' >Android Developement</h3>
               <span className='skills_number ' >60%</span>
              </div>

              <div className='skills__bar' >
                  <span className='skills__percentage photography' ></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox/>
      </section>
    </div>
  )
}

export default About