import React from 'react'

import './Input.scss'

const Input = (props) => {
  return (
    <div className={props.classes.join(' ')} htmlFor={props.id}>
      <div className='Input-Top'>
        <span className='Input-Name'>{props.title}</span>
        {
          props.renderLink ? props.renderLink() : null
        }
      </div>
      <div className="Input-Box">
        <input className='Input-Inp'
          value={props.value}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          onChange={props.handleChenge}
          onBlur={props.handleBlur}
          onFocus={props.handleFocus}
          required={props.required}
        />
        {
          props.renderButton ? props.renderButton() : null
        }
      </div>
      <span className='Input-Error'>{!props.validate && props.touched ? props.errorMessage : ''}</span>
    </div>
  )
}

export default Input