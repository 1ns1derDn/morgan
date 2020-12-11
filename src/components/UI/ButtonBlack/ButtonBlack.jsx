import React from 'react'

import './ButtonBlack.scss'

const ButtonBlack = (props) => {
  return (
    <button className={props.classes.join(' ')}>{props.title}</button>
  )
}

const ContainerButtonBlack = (props) => {

  const classes = ['ButtonBlack']

  if (props.clazz) {
    classes.push(props.clazz)
  }

  return <ButtonBlack {...props} classes={classes}/>
}

export default ContainerButtonBlack