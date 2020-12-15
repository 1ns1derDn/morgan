import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonWhite.scss'
const ButtonWhite = (props) => {

  if (props.buttonIslink) {
    return (
      <Link
        to={props.to}
        onClick={props.onClick}
        className={props.clazz ? 'ButtonWhite ' + props.clazz : 'ButtonWhite'} >
        <img className='ButtonWhite-Icon' src={props.src} alt={props.alt} />
        <span className='ButtonWhite-Title'>{props.title}</span>
      </Link>
    )
  }

  return (
    <button
      onClick={props.onClick}
      className={props.clazz ? 'ButtonWhite ' + props.clazz : 'ButtonWhite'} >
      <img className='ButtonWhite-Icon' src={props.src} alt={props.alt} />
      <span className='ButtonWhite-Title'>{props.title}</span>
    </button>
  )
}

export default ButtonWhite