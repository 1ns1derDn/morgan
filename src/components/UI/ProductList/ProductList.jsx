import React from 'react'
import Product from '../Product/Product'
import { API_CATEGORIES } from '../../../services/serviceLampVariables'

import './ProductList.scss'

const ProductList = (props) => {
  return (
    <ul className='ProductList'>
      {
        props.products.map((product) => {
          const isBasket = props.basketProducts.map((product) => product.id).includes(product.id)
          let category = '' 
          if(props.categories.length > 0) {
            category = props.categories.find((category) => category.id === product.categoryId).title
          }
          return (
            <li key={product.id} className='ProductList-Item'>
              <Product
                clazz='ProductList-Product'
                name={product.name}
                price={product.price}
                image={`${API_CATEGORIES}${product.image}`}
                alt={product.name}
                isBasket={isBasket}
                handleAddProductToBasket={
                  () => props.handleAddProductToBasket({ ...product, category }, isBasket)}
                handleAllRemoveProductFromBasket={
                  () => props.handleAllRemoveProductFromBasket({ ...product, category }, isBasket)}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

export default ProductList