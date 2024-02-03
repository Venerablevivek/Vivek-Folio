import React from 'react'
import './skill.css'
import ReactImg from '../../assets/Skills/React.png';
import MongoDB from '../../assets/Skills/MongoDB.svg';
import Express from '../../assets/Skills/Express.png';
import NodeJS from '../../assets/Skills/NodeJs.svg';
import HTML from '../../assets/Skills/HTML.png';
import CSS from '../../assets/Skills/CSS.png';
import Tailwind from '../../assets/Skills/Tailwind.png';
import BootStrap from '../../assets/Skills/Bootstrap.svg';
import Git from '../../assets/Skills/Git.svg';
import Github from '../../assets/Skills/Github.svg';
import Redux from '../../assets/Skills/Redux.svg';
import Blob from '../../assets/Skills/blob vector.png'
import JS from '../../assets/Skills/Javascript.svg';
import C from '../../assets/Skills/C.png';
import Cplus from '../../assets/Skills/C++.png';
import java from '../../assets/Skills/java.png';
import postman from '../../assets/Skills/postman.png';
import python from '../../assets/Skills/python.png';
import sql from '../../assets/Skills/mysql.png';


const Skill = () => {
  return (
    <div>
    <section className='skill container section' id='skill' >
      <h2 className='section__title' >Skills</h2>

      <div className='skills' >
            <img className='blob-style' src={Blob} />
            <img className='skills-logo' src={C} />
            <img className='skills-logo' src={Cplus} />
            <img className='skills-logo' src={java} />
            <img className='skills-logo' src={ReactImg} />
            <img className='skills-logo' src={MongoDB} />
            <img className='skills-logo' src={Express} />
            <img className='skills-logo' src={NodeJS} />
            <img className='skills-logo' src={sql} />
            <img className='skills-logo' src={python} />
            <img className='skills-logo' src={HTML} />
            <img className='skills-logo' src={CSS} />
            <img className='skills-logo' src={JS} />
            <img className='skills-logo' src={Tailwind} />
            <img className='skills-logo' src={BootStrap} />
            <img className='skills-logo' src={postman} />
            <img className='skills-logo' src={Git} />
            <img className='skills-logo' src={Github} />
            <img className='skills-logo' src={Redux} />

      </div>
    </section>
</div>
  )
}

export default Skill