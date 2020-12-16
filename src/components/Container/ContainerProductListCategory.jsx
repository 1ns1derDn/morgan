import React, { useEffect, useCallback, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortProduct, filterProductsCategories, fetchProducts, addPaginationProducts, refreshPaginationProducts } from '../../actions/productsActions'
import { handleToggleOpen, handleSelected } from '../../actions/sortSelectActions'
import { fetchCategories } from '../../actions/сategoriesActions'
import { switchArrowsOpposite } from '../../actions/arrowActions'
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

  const arrowUp = useSelector(state => state.arrows.arrowUp)


  const handleSwitchArrowsOpposite = useCallback(() => dispatch(switchArrowsOpposite()), [dispatch])

  const fnFetchProducts = useCallback(() => dispatch(fetchProducts(getProducts)()), [getProducts, dispatch])
  const fnHandleToggleOpen = () => dispatch(handleToggleOpen())
  const fnSortProducts = useCallback((type, products) => dispatch(sortProduct(type, products)), [dispatch])
  const fnHandleSelected = (e, id) => dispatch(handleSelected(e.target.value, id))
  const fnFilterProductsCategories = useCallback((categoryId) => dispatch(filterProductsCategories(categoryId)), [dispatch])
  const fnFetchCategories = useCallback(() => dispatch(fetchCategories(getCategories)()), [getCategories, dispatch])
  const fnOrderProcessRefresh = useCallback(() => dispatch(orderProcessRefresh()), [dispatch])
  const handleAddPaginationProducts = () => dispatch(addPaginationProducts())
  const fnRefreshPaginationProducts = useCallback(() => dispatch(refreshPaginationProducts()), [dispatch])
  useEffect(() => {
    fnFetchCategories()
    fnFetchProducts()
    fnOrderProcessRefresh()
    fnRefreshPaginationProducts()
  }, [fnFetchCategories, fnFetchProducts, fnOrderProcessRefresh, fnRefreshPaginationProducts])

  useEffect(() => {
    fnSortProducts(sortSelect.value, products.products)
    fnFilterProductsCategories(selectedCategoryId)
  }, [sortSelect.value, selectedCategoryId, fnSortProducts, fnFilterProductsCategories, products.products, products.paginationCount])

  useEffect(() => {
    if (window.matchMedia("(max-width: 1365px)").matches) {
      return
    } else {
      let flag = false
      const scrollPositionArrow = function () {
        if (window.pageYOffset > 730 && !flag) {
          console.log(1);
          handleSwitchArrowsOpposite()
          flag = true
        }
        if (window.pageYOffset < 730 && flag) {
          handleSwitchArrowsOpposite()
          flag = false
        }
      }
      window.addEventListener('scroll', scrollPositionArrow)
      return () => {
        window.removeEventListener('scroll', scrollPositionArrow)
      }
    }
  }, [handleSwitchArrowsOpposite])

  return <ProductListCategory
    arrowUp={arrowUp}
    products={products}
    handleAddPaginationProducts={handleAddPaginationProducts}
    categories={categories}
    sortSelect={sortSelect}
    handleToggleOpen={fnHandleToggleOpen}
    handleSelected={fnHandleSelected}
  />
}

export default ContainerProductListCategory