import React from 'react'
import './ButtonWhite.scss'

const ButtonWhite = (props) => {
  return (
    <button className='ButtonWhite'>
      <img className='ButtonWhite-Icon' src={props.src} alt={props.alt} />
      <span className='ButtonWhite-Title'>{props.title}</span>
    </button>
  )
}

export default ButtonWhite