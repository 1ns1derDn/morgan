import React from 'react'
import { Link } from 'react-router-dom'

import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image3 from './image3.jpg'
import image4 from './image4.jpg'

import './Category.scss'

const Category = ({ categories, clazz }) => {

  const images = [image1, image2, image3, image4]

  if (categories.length === 0) {
    return null
  }
  return (
    <div className={clazz ? 'Category ' + clazz : 'Category'}>
      <ul className='Category-Inner'>
        {
          categories.map((category, index) => {

            let classes = 'Category-Title'

            if(index === 0) {
              classes += ' Category-Title_White' 
            }
            return (
              <li className={`Category-Item Category-Item${index + 1}`}>
                <Link
                  to={'/' + category.alias}
                  >
                  <img src={images[index]} alt={category.title}
                  />
                  <h3 className={classes}>{category.title}</h3>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div >
  )
}

export default Category