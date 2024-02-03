import React from 'react';
import "./Resume.css";
import Data from './Data';
import Card from './Card';

const Resume = () => {
  return (
    <div>
      <section className='resume container section' id='experience' >
        <h2 className='section__title' >Experience</h2>

        <div className='resume__container grid' >
            <div className='timeline grid' >
              {Data.map((val, id)=>{
                if(val.category === "education"){
                  return (
                    <Card key={id} icon={val.icon} title={val.title} college={val.college} major={val.major} grade={val.grade}
                      year={val.year} desc={val.desc}
                    />
                  )
                }
              })}
            </div>

            <div className='timeline grid' >
              {Data.map((val, index)=>{
                if(val.category === "experience"){
                  return (
                    <Card key={index} icon={val.icon} title={val.title} 
                      year={val.year} desc={val.desc} company={val.company}
                    />
                  )
                }
              })}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Resume