import React from 'react'
import Title from '../../UI/Title/Title'

import send from './icon/send.svg'

import './LinkSend.scss'

const LinkSend = (props) => (
  <section className="LinkSend">
    <div className="Container">
      <div className="LinkSend-Inner">
        <div className='LinkSend-Box'>
          <Title classes='LinkSend-Title' title='YOUR LINK HAS BEEN SENT' />
          <div className='LinkSend-Icon'>
            <img src={send} alt='icon send' />
          </div>
          <p className='LinkSend-Text'>
            We have sent a password reset email to your adress:
        </p>
          <span className='LinkSend-Email'>
            {props.email}
          </span>
          <p className='LinkSend-Text'>
            If you can’t find the email, please check your junk folder.
        </p>
        </div>
      </div>
    </div>
  </section>
)

export default LinkSend