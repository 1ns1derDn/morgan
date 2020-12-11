import React from 'react'
import './Title.scss'

const Title = ({ title, classes }) => (
  <h1 className={classes ? 'Title ' + classes : 'Title'}>
    {title}
  </h1>
)

export default Title