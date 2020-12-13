import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortProduct, filterProductsCategories, fetchProducts } from '../../actions/productsActions'
import { addProductToBasket, removeProductFromBasket } from '../../actions/basketActions'
import { handleToggleOpen, handleSelected } from '../../actions/sortSelectActions'
import ProductListCategory from '../Page/ProductListCategory/ProductCategory'

const ContainerProductListCategory = ({ getProducts }) => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.products)
  const sortSelect = useSelector(state => state.sortSelect)
  const selectedCategoryId = useSelector(state => state.categories.selectedCategoryId)

  const fnFetchProducts = useCallback(() => dispatch(fetchProducts(getProducts)()), [getProducts, dispatch])
  const fnHandleToggleOpen = () => dispatch(handleToggleOpen())
  const fnSortProducts = useCallback((type, products) => dispatch(sortProduct(type, products)), [dispatch])
  const fnHandleSelected = (e, id) => dispatch(handleSelected(e.target.value, id))
  const fnFilterProductsCategories = useCallback((categoryId) => dispatch(filterProductsCategories(categoryId)), [dispatch])
  const handleAddProductToBasket = (product, isBasket) => dispatch(addProductToBasket(product, isBasket))
  const handleRemoveProductFromBasket = (id) => dispatch(removeProductFromBasket(id))
  useEffect(() => {
    console.log(1);
    fnFetchProducts()
  }, [fnFetchProducts])

  useEffect(() => {
    fnSortProducts(sortSelect.value, products.products)
    fnFilterProductsCategories(selectedCategoryId)
  }, [sortSelect.value, selectedCategoryId, fnSortProducts, fnFilterProductsCategories, products.products])

  return <ProductListCategory
    handleAddProductToBasket={handleAddProductToBasket}
    handleRemoveProductFromBasket={handleRemoveProductFromBasket}
    products={products.productsVisible}
    sortSelect={sortSelect}
    handleToggleOpen={fnHandleToggleOpen}
    handleSelected={fnHandleSelected}
  />
}

export default ContainerProductListCategory