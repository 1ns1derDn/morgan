import React from 'react'

import './ButtonIcon.scss'

const ButtonIcon = ({ img, alt, onClick, clazz }) => (
  <button
    className={clazz ? 'ButtonIcon ' + clazz : 'ButtonIcon'}
    onClick={onClick}>
    <img src={img} alt={alt} />
  </button >
)

export default ButtonIcon