import React from 'react'
import arrowDown from './icon/arrowDown.svg'
import arrowUp from './icon/arrowUp.svg'
import './ArrowScroll.scss'


const ArrowScroll = (props) => {
  let classes = 'ArrowScroll'

  if(props.visible) {
    classes += ' ArrowScroll_Visible'
  } else {
    classes += ' ArrowScroll_Disable'
  }

  if(props.reverse) {
    classes += ' ArrowScroll_Reverse'
  }

  if(props.clazz) {
    classes += ` ${props.clazz}`
  }

  return (
    <a className={classes} href={props.id} >
      <img className='ArrowScroll-Icon' src={props.reverse ? arrowUp : arrowDown} alt='arrow' />
      <span className='ArrowScroll-Title'>
        {props.title}
      </span>
    </a>
  )
}

export default ArrowScroll