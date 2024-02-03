import React, { useState } from 'react';
import "./Sidebar.css";

const Sidebar = () => {
   const [toggle, showMenu] = useState(false);
  return (
      <>
      <aside className={toggle ? "aside bar":
    "hide"} >
      <a href='#home' className='nav_logo'>
        <img src="" alt='' />
      </a>

      <nav className='nav' >
        <div className='nav__menu' >
            <ul className='nav__list'>

              <li className='nav__item'>
                 <a href='#home' className='nav__link'>
                  <i className='icon-home' ></i>
                 </a>
              </li>

              <li className='nav__item'>
                 <a href='#about' className='nav__link'>
                    <i className='icon-user-following' ></i>
                 </a>
              </li>

              <li className='nav__item'>
                 <a href='#coding_Profies' className='nav__link'>
                 <i className='icon-briefcase' ></i>
                 </a>
              </li>

              <li className='nav__item'>
                 <a href='#skill' className='nav__link'>
                 <i className='icon-star' ></i>
                 </a>
              </li>

              <li className='nav__item'>
                 <a href='#experience' className='nav__link'>
                 <i className='icon-graduation' ></i>
                 </a>
              </li>

              <li className='nav__item'>
                 <a href='#projects' className='nav__link'>
                 <i className='icon-layers' ></i>
                 </a>
              </li>

              <li className='nav__item'>
                 <a href='#blog' className='nav__link'>
                 <i className='icon-note' ></i>
                 </a>
              </li>

              <li className='nav__item'>
                 <a href='#contact' className='nav__link'>
                 <i className='icon-bubble' ></i>
                 </a>
              </li>

            </ul>
        </div>
      </nav>

      <div className='nav__footer'>
        <span className='copyright'>&copy; Vivek Chaudhary</span>
      </div>

    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open":
    "nav__toggle"} onClick={()=> showMenu(!toggle)}>
      <i className='icon-menu btn-side' ></i>
    </div>
      </>
  )
}

export default Sidebar