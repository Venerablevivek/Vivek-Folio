import React from 'react';
import "./Services.css";
import Image1 from "../../assets/leetcode.png";
import Image2 from "../../assets/gfg.png";
import Image3 from "../../assets/cd.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Leetcode",
    link: "https://leetcode.com/vivekchaudhary22/",
    description:
      "Solved large number of Data Structure & Algorithms problems (around 400+) on various topics such as Dynamic Programming, Recursion, Linked List, etc.",
  },
  {
    id: 2,
    image: Image2,
    title: "GeeksForGeeks",
    link: "https://auth.geeksforgeeks.org/user/vchcoo2wg4",
    description:
      "Secured 3rd in GFG University Rank and Solved more than 250+ DSA Problems and still counting...",
  },
  {
    id: 3,
    image: Image3,
    title: "CodeForces",
    link: "https://codeforces.com/profile/Venerablevivek",
    description:
      "Solved Some Competitive programming problems. Currently a newbie and looking forward to gain more experience.",
  },
];

const Services = () => {

  return (
    <div>
        <section className='services container section' id='coding_Profies' >
          <h2 className='section__title' >Coding Profiles</h2>
          
          <div className='services__container grid' >
            {data.map(({id, image, title, description, link}) => {
              return (
                <a href={link} className='services__card' key={id} target='_blank' rel='noreferrer' >
                  <img src={image} alt="" className='services__img' />

                  <h3 className='services__title' >{title}</h3>
                  <p className='services__description' >{description}</p>
                </a>
              )
            })}
            {/*  */}
          </div>
        </section>
    </div>
  )
}

export default Services