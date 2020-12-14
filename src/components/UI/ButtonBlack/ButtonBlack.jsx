import React from 'react'
import { Link } from 'react-router-dom'
import './ButtonBlack.scss'

const ButtonBlack = (props) => {
  const classes = ['ButtonBlack']

  if (props.clazz) {
    classes.push(props.clazz)
  }

  if(props.buttonIsLink) {
    return (
      <Link to={props.to} onClick={props.onClick} className={classes.join(' ')}>{props.title}</Link>
    )
  }

  return (
    <button onClick={props.onClick} className={classes.join(' ')}>{props.title}</button>
  )
}

export default ButtonBlack