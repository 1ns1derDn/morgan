import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Product/Product'

import './ProductList.scss'

const ProductList = (props) => {

  const basketProducts = useSelector(state => state.basket.basketProducts)

  return (
    <ul className='ProductList'>
      {
        props.products.map((product) => {
          let isBasket = basketProducts.map((product) => product.id).includes(product.id)
          return (
            <li key={product.id} className='ProductList-Item'>
              <Product
                name={product.name}
                price={product.price}
                image={product.image}
                alt={product.name}
                isBasket={isBasket}
                handleAddProductToBasket={() => props.handleAddProductToBasket(product, isBasket)}
                handleRemoveProductFromBasket={() => props.handleRemoveProductFromBasket(product.id)}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

const ConrainerProductList = () => {
  return <ProductList />
}

export default ProductList