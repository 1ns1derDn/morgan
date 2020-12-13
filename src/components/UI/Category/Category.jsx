import React from 'react'
import { Link } from 'react-router-dom'

import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'

import './Category.scss'

const Category = ({categories, clazz}) => {
  if (categories.length === 0) {
    return null
  }
  return (
    <div className={clazz ? 'Category ' + clazz : 'Category'}>
      <div className='Category-Inner'>
        <Link
          to='/table-lamps' className='Category-Item Category-Item1'>
          <img src={image1} alt={categories[0].title} />
          <h3 className='Category-Title Category-Title_White'>{categories[0].title}</h3>
        </Link>
        <Link
          to='/floor-lamps' className='Category-Item Category-Item2'>
          <img src={image2} alt={categories[1].title} />
          <h3 className='Category-Title'>{categories[1].title}</h3>
        </Link>
        <Link
          to='/exterior-ceiling' className='Category-Item Category-Item3'>
          <img src={image3} alt={categories[2].title} />
          <h3 className='Category-Title'>{categories[2].title}</h3>
        </Link>
        <Link
          to='/interior-ceiling' className='Category-Item Category-Item4'>
          <img src={image4} alt={categories[3].title} />
          <h3 className='Category-Title'>{categories[3].title}</h3>
        </Link>
      </div>
    </div >
  )
}

export default Category