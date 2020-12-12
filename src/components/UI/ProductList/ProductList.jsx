import React from 'react'
import Product from '../Product/Product'

import './ProductList.scss'

const ProductList = (props) => (
  <ul className='ProductList'>
    {
      props.products.map((product) => {
        return (
          <li key={product.id} className='ProductList-Item'>
            <Product 
              name={product.name}
              price={product.price}
              image={product.image}
              alt={product.name}
              isBasket={false}
            />
          </li>
        )
      })
    }
  </ul>
)

export default ProductList