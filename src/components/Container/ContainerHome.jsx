import React, { useEffect, useCallback, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortProduct } from '../../actions/productsActions'
import { handleSelectedCategory, fetchCategories } from '../../actions/сategoriesActions'

import ContextServiceProducts from '../Context/ContextServiceProducts'
import Home from '../Page/Home/Home'

const ContainerHome = () => {

  const { getCategories, getProducts } = useContext(ContextServiceProducts)

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)
  const categories = useSelector(state => state.categories.categories)
  const sortSelect = useSelector(state => state.sortSelect)

  const fnSortProducts = useCallback((type, products) => dispatch(sortProduct(type, products)), [dispatch])
  const fnHandleSelectedCategory = (categoryId) => dispatch(handleSelectedCategory(categoryId))
  const fnFetchCategories = useCallback(() => dispatch(fetchCategories(getCategories)()), [getCategories, dispatch])
  useEffect(() => {
    fnFetchCategories()
  }, [fnFetchCategories])

  useEffect(() => {
    fnSortProducts(sortSelect.value, products.products)
  }, [sortSelect.value, fnSortProducts, products.products])

  return <Home
    fnHandleSelectedCategory={fnHandleSelectedCategory}
    categories={categories}
    getProducts={getProducts}
  />
}

export default ContainerHome