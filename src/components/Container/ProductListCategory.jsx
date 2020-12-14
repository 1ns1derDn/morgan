import React, { useEffect, useCallback, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortProduct, filterProductsCategories, fetchProducts } from '../../actions/productsActions'
import { handleToggleOpen, handleSelected } from '../../actions/sortSelectActions'
import { fetchCategories } from '../../actions/сategoriesActions'
import { orderProcessRefresh } from '../../actions/basketActions'
import ProductListCategory from '../Page/ProductListCategory/ProductCategory'

import ContextServiceProducts from '../Context/ContextServiceProducts'

const ContainerProductListCategory = ({ getProducts }) => {

  const dispatch = useDispatch()

  const { getCategories } = useContext(ContextServiceProducts)

  const products = useSelector(state => state.products)
  const sortSelect = useSelector(state => state.sortSelect)
  const categories = useSelector(state => state.categories.categories)
  const selectedCategoryId = useSelector(state => state.categories.selectedCategoryId)

  const fnFetchProducts = useCallback(() => dispatch(fetchProducts(getProducts)()), [getProducts, dispatch])
  const fnHandleToggleOpen = () => dispatch(handleToggleOpen())
  const fnSortProducts = useCallback((type, products) => dispatch(sortProduct(type, products)), [dispatch])
  const fnHandleSelected = (e, id) => dispatch(handleSelected(e.target.value, id))
  const fnFilterProductsCategories = useCallback((categoryId) => dispatch(filterProductsCategories(categoryId)), [dispatch])
  const fnFetchCategories = useCallback(() => dispatch(fetchCategories(getCategories)()), [getCategories, dispatch])
  const fnOrderProcessRefresh = useCallback(() => dispatch(orderProcessRefresh()), [dispatch])

  useEffect(() => {
    fnFetchCategories()
    fnFetchProducts()
    fnOrderProcessRefresh()
  }, [fnFetchCategories, fnFetchProducts, fnOrderProcessRefresh])

  useEffect(() => {
    fnSortProducts(sortSelect.value, products.products)
    fnFilterProductsCategories(selectedCategoryId)
  }, [sortSelect.value, selectedCategoryId, fnSortProducts, fnFilterProductsCategories, products.products])

  return <ProductListCategory
    categories={categories}
    sortSelect={sortSelect}
    handleToggleOpen={fnHandleToggleOpen}
    handleSelected={fnHandleSelected}
  />
}

export default ContainerProductListCategory