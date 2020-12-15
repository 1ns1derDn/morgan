import React from 'react'
import { useSelector } from 'react-redux'
import HeadPanel from '../UI/HeadPanel/HeadPanel'

const ContainerHeadPanel = () => {
  const basketProducts = useSelector(state => state.basket.basketProducts)
  const quantity = useSelector(state => state.basket.quantity)

  return <HeadPanel
    quantity={quantity}
    basketProducts={basketProducts}
  />
}

export default ContainerHeadPanel