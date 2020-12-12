import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, sortProduct, filterProductsCategories } from '../../actions/productsActions'
import { fetchCategories, handleSelectedCategory } from '../../actions/сategoriesActions'
import { handleToggleOpen, handleSelected } from '../../actions/sortSelectActions'
import ContextServiceProducts from '../Context/ContextServiceProducts'
import ProductListCategory from '../Page/ProductListCategory/ProductCategory'


const ContainerProductListCategory = () => {

  const dispatch = useDispatch()

  const serviceLamp = useContext(ContextServiceProducts)

  const products = useSelector(state => state.products)
  const sortSelect = useSelector(state => state.sortSelect)
  const selectedCategoryId = useSelector(state => state.categories.selectedCategoryId)

  const fnFetchProducts = () => dispatch(fetchProducts(serviceLamp, selectedCategoryId)())
  const fnFetchCategories = () => dispatch(fetchCategories(serviceLamp)())
  const fnHandleToggleOpen = () => dispatch(handleToggleOpen())
  const fnSortProducts = (type, products) => dispatch(sortProduct(type, products))
  const fnHandleSelected = (e, id) => dispatch(handleSelected(e.target.value, id))
  const fnHandleSelectedCategory = (categoryId) => dispatch(handleSelectedCategory(categoryId))
  const fnFilterProductsCategories = (categoryId) => dispatch(filterProductsCategories(categoryId))

  console.log(products.productsVisible);

  useEffect(() => {
    fnFetchProducts()
    fnFetchCategories()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fnSortProducts(sortSelect.value, products.products)
    fnFilterProductsCategories(selectedCategoryId)
  }, [sortSelect.value, selectedCategoryId]) // eslint-disable-line react-hooks/exhaustive-deps

  return <ProductListCategory
    fnHandleSelectedCategory={fnHandleSelectedCategory}
    products={products.productsVisible}
    sortSelect={sortSelect}
    handleToggleOpen={fnHandleToggleOpen}
    handleSelected={fnHandleSelected}
  />
}

export default ContainerProductListCategory