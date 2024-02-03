import React, { useState } from 'react';
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) =>{
    const updatedItems = Menu.filter((curElem) =>{
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  }
  return (
    <div>
      <section className='work container section' id='projects' >
          <h2 className='section__title' >My Projects</h2>

          <div className='work__filters' >
              <span className='work__item' onClick={()=> setItems(Menu)} >All</span>
              <span className='work__item' onClick={()=> filterItem("frontend")} >Frontend</span>
              <span className='work__item' onClick={()=> filterItem("backend")}>Backend</span>
              <span className='work__item' onClick={()=> filterItem("fullstack")}>FullStack</span>
              <span className='work__item' onClick={()=> filterItem("portfolio")}>Portfolio's</span>
              <span className='work__item' onClick={()=> filterItem("android")}>Android</span>
              <span className='work__item' onClick={()=> filterItem("mini")}>Mini Projects</span>
          </div>

          <div className='work__container grid' >
              {items.map((elem)=>{
                const {id, image, title, category, link} = elem;
                return (
                  <div className='work__card' key={id} >
                    <div className='work__thumbnail' >
                      <img src={image} alt="" className='work__img' />
                      <div className='work__mask' ></div>
                    </div>

                    <span className='work__category' >{category}</span>
                    <h3 className='work__title' >{title}</h3>
                    <a href={link} className='work__button' target="_blank" >
                      <i className='icon-link work__button-icon' ></i>
                    </a>
                  </div>
                )
              })}
          </div>
      </section>
    </div>
  )
}

export default Portfolio