import React from 'react'

const Card = (props) => {
  return (
    <div className='timeline__item' >
        <i className={props.icon} ></i>
        <span className='timeline__date' >{props.year}</span>
        <h3 className='timeline__title' >{props.title}</h3>
        <p className='timeline__company' >{
          props.company ? props.company : props.college
        }</p>
        <div className='timeline_info' >
             <p className='timeline_edu' >{props.major}</p>
              <p className='timeline_edu'>{props.grade}</p>
        </div>
        <p className='timeline__text' >{props.desc}</p>
    </div>
  )
}

export default Card