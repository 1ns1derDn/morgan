import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortProduct } from '../../actions/productsActions'
import { handleSelectedCategory } from '../../actions/сategoriesActions'
import { handleToggleOpen, handleSelected } from '../../actions/sortSelectActions'

import Home from '../Page/Home/Home'

import { fetchProductsSuccess, setProductsVisivle, filterProductsCategories, fetchProductsFailure } from '../../actions/productsActions'
import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../../actions/сategoriesActions'

const useServiceProducts = (selectedCategoryId) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    fetch('https://morgan-shop.herokuapp.com/products')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchProductsSuccess(data.products))
        dispatch(setProductsVisivle(data.products))
      })
      .then(() => {
        dispatch(filterProductsCategories(selectedCategoryId))
      })
      .catch(error => dispatch(fetchProductsFailure(error)))

    fetch('https://morgan-shop.herokuapp.com/categories')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchCategoriesSuccess(data.categories))
      })
      .catch(error => dispatch(fetchCategoriesFailure(error)))
  }, [dispatch, selectedCategoryId]);
}

const ContainerHome = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)
  const categories = useSelector(state => state.categories.categories)
  const sortSelect = useSelector(state => state.sortSelect)
  const selectedCategoryId = useSelector(state => state.categories.selectedCategoryId)

  const fnHandleToggleOpen = () => dispatch(handleToggleOpen())
  const fnSortProducts = (type, products) => dispatch(sortProduct(type, products))
  const fnHandleSelected = (e, id) => dispatch(handleSelected(e.target.value, id))
  const fnHandleSelectedCategory = (categoryId) => dispatch(handleSelectedCategory(categoryId))

  useServiceProducts(selectedCategoryId)

  useEffect(() => {
    fnSortProducts(sortSelect.value, products.products)
  }, [sortSelect.value])

  return <Home
    fnHandleSelectedCategory={fnHandleSelectedCategory}
    products={products.productsVisible}
    categories={categories}
    sortSelect={sortSelect}
    handleToggleOpen={fnHandleToggleOpen}
    handleSelected={fnHandleSelected}
  />
}

export default ContainerHome