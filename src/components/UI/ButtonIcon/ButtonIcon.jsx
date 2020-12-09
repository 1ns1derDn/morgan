import React from 'react'

const ButtonIcon = ({ img, alt, onClick }) => (
  <button onClick={onClick}>
    <img src={img} alt={alt} />
  </button>
)

export default ButtonIcon