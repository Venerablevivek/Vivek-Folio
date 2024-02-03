import React from 'react'

const AboutBox = () => {
  return (
    <div className='about__boxes grid' >
        <div className='about__box' >
           <i className='about__icon icon-fire ' ></i>

           <div>
                <h3 className='about__title' >600+</h3>
                <span className='about__subtitle' >Problems Solved</span>
           </div>
        </div>

        <div className='about__box' >
           <i className='about__icon icon-cup' ></i>

           <div>
                <h3 className='about__title' >10+</h3>
                <span className='about__subtitle' >Cup of coffee</span>
           </div>
        </div>

        <div className='about__box' >
           <i className='about__icon icon-people ' ></i>

           <div>
                <h3 className='about__title' >10+</h3>
                <span className='about__subtitle' >Satisfied Client</span>
           </div>
        </div>

        <div className='about__box' >
           <i className='about__icon icon-badge' ></i>

           <div>
                <h3 className='about__title' >20+</h3>
                <span className='about__subtitle' >Open Source Contribution</span>
           </div>
        </div>
    </div>
  )
}

export default AboutBox