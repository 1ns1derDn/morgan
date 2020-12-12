import React from 'react'
import { Link } from 'react-router-dom'

import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'

import './Category.scss'

const Category = (props) => {
  if (!props.categories) {
    return null
  }
  return (
    <div className={props.clazz ? 'Category ' + props.clazz : 'Category'}>
      <div className='Category-Inner'>
        <Link
          onClick={() => props.fnHandleSelectedCategory(props.categories[0].id)}
          to='/' className='Category-Item Category-Item1'>
          <img src={image1} alt={props.categories[0].title} />
          <h3 className='Category-Title Category-Title_White'>{props.categories[0].title}</h3>
        </Link>
        <Link
          onClick={() => props.fnHandleSelectedCategory(props.categories[1].id)}
          to='/' className='Category-Item Category-Item2'>
          <img src={image2} alt={props.categories[1].title} />
          <h3 className='Category-Title'>{props.categories[1].title}</h3>
        </Link>
        <Link
          onClick={() => props.fnHandleSelectedCategory(props.categories[2].id)}
          to='/floor-lamps' className='Category-Item Category-Item3'>
          <img src={image3} alt={props.categories[2].title} />
          <h3 className='Category-Title'>{props.categories[2].title}</h3>
        </Link>
        <Link
          onClick={() => props.fnHandleSelectedCategory(props.categories[3].id)}
          to='/' className='Category-Item Category-Item4'>
          <img src={image4} alt={props.categories[3].title} />
          <h3 className='Category-Title'>{props.categories[3].title}</h3>
        </Link>
      </div>
    </div >
  )
}

export default Category