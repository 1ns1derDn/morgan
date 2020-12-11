import React from 'react'
import Input from './Input'

const ContainerInput = (props) => {

  const classes = ['Input']
  if (props.clazz) {
    classes.push(props.clazz)
  }

  if (!props.validate && props.touched) {
    classes.push('Input_ErrorMessage')
  }

  return <Input
    {...props}
    classes={classes} />
}

export default ContainerInput