import React from 'react'
import search from './icon/search.svg'

import './ButtonSearch.scss'

const ButtonSearch = () => (
  <button className='ButtonSearch'>
    <img className='ButtonSearch-Icon' src={search} alt='search' />
  </button>
)

export default ButtonSearch