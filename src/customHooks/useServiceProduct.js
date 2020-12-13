import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import {
  fetchProductsSuccess,
  setProductsVisivle,
  filterProductsCategories,
  fetchProductsFailure
} from '../actions/productsActions'
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure
} from '../actions/сategoriesActions'

const useServiceProducts = (selectedCategoryId) => {
  const dispatch = useDispatch()

  const fetchProduct = useCallback(() => {
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
  }, [selectedCategoryId, dispatch])


  const fetchCategories = useCallback(() => {
    fetch('https://morgan-shop.herokuapp.com/categories')
      .then(res => res.json())
      .then(data => {
        dispatch(fetchCategoriesSuccess(data.categories))
      })
      .catch(error => dispatch(fetchCategoriesFailure(error)))
  }, [dispatch])

  return [fetchProduct, fetchCategories]
}

export default useServiceProducts