import React from 'react'
import { useSelector } from 'react-redux'
import Basket from '../Page/Basket/Baske'

const ContainerBasket = () => {
  const basketProducts = useSelector(state => state.basket.basketProducts)
  return <Basket basketProducts={basketProducts}/>
}

export default ContainerBasket