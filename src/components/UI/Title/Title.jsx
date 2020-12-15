import React from 'react'
import './Title.scss'

const Title = ({ title, clazz }) => (
  <h1 className={clazz ? 'Title ' + clazz : 'Title'}>
    {title}
  </h1>
)

export default Title