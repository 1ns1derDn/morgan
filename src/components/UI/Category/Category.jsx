import React from 'react'
import { Link } from 'react-router-dom'
import { API_CATEGORIES } from '../../../services/serviceLampVariables'
import './Category.scss'

const Category = ({ categories, clazz }) => {

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
              <li key={category.id} className={`Category-Item Category-Item${index + 1}`}>
                <Link
                  to={'/' + category.alias}
                  >
                  <img src={`${API_CATEGORIES}${category.image}`} alt={category.title}
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