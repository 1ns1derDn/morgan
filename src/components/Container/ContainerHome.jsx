import React, { useEffect, useCallback, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortProduct } from '../../actions/productsActions'
import { handleSelectedCategory } from '../../actions/сategoriesActions'

import ContextServiceProducts from '../Context/ContextServiceProducts'
import Home from '../Page/Home/Home'

const ContainerHome = () => {

  const dispatch = useDispatch()
  const { getProducts } = useContext(ContextServiceProducts)

  const products = useSelector(state => state.products)
  const arrowDown = useSelector(state => state.arrows.arrowDown)
  const categories = useSelector(state => state.categories.categories)
  const sortSelect = useSelector(state => state.sortSelect)
  
  const fnSortProducts = useCallback((type, products) => dispatch(sortProduct(type, products)), [dispatch])
  const fnHandleSelectedCategory = (categoryId) => dispatch(handleSelectedCategory(categoryId)())

  useEffect(() => {
    fnSortProducts(sortSelect.value, products.products)
  }, [sortSelect.value, fnSortProducts, products.products])

  return <Home
    arrowDown={arrowDown}
    fnHandleSelectedCategory={fnHandleSelectedCategory}
    categories={categories}
    getProducts={getProducts}
  />
}

export default ContainerHome