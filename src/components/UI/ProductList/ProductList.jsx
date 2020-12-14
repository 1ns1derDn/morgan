import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addProductToBasket,
  AllRemoveProductFromBasket
} from '../../../actions/basketActions'

import Product from '../Product/Product'

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
                name={product.name}
                price={product.price}
                image={product.image}
                alt={product.name}
                isBasket={isBasket}
                handleAddProductToBasket={() => props.handleAddProductToBasket({ ...product, category }, isBasket)}
                handleAllRemoveProductFromBasket={() => props.handleAllRemoveProductFromBasket({ ...product, category }, isBasket)}
              />
            </li>
          )
        })
      }
    </ul>
  )
}

const ConrainerProductList = (props) => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.products.productsVisible)
  const basketProducts = useSelector(state => state.basket.basketProducts)
  const handleAddProductToBasket = (product, isBasket) => dispatch(addProductToBasket(product, isBasket))
  const handleAllRemoveProductFromBasket = (products) => dispatch(AllRemoveProductFromBasket(products))

  return <ProductList
    categories={props.categories}
    basketProducts={basketProducts}
    handleAddProductToBasket={handleAddProductToBasket}
    handleAllRemoveProductFromBasket={handleAllRemoveProductFromBasket}
    products={products}
  />
}

export default ConrainerProductList