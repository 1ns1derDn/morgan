export default class ServiceProducts {
  _apiProducts = 'https://morgan-shop.herokuapp.com'
  _apiCategories = 'https://morgan-shop.herokuapp.com'

  _tableLamps = 'f95e6ae1-a4bd-44d5-917d-7015f6cdd592'
  _floorLamps = '66ef32ef-03ad-48c2-b295-bdfc018b5881'
  _exteriorCeiling = 'f6e7591c-6743-432d-992b-c3bff746848d'
  _interiorCeiling = 'dc4437c1-364b-4ba5-992a-15f55ca2d8eb'

  _getProductsFilter = async (data, categoryId) => {
    return await data.products.filter((product) => product.categoryId === categoryId)
  }

  getResource = async (apiBaseUrl, url) => {
    const res = await fetch(`${apiBaseUrl}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getProducts = async () => {
    const data = await this.getResource(this._apiProducts, '/products')
    return await data.products
  }

  getCategories = async () => {
    return await this.getResource(this._apiCategories, '/categories')
  }

  getProductsTableLamps = async () => {
    const data = await this.getResource(this._apiProducts, '/products')
    return this._getProductsFilter(data, this._tableLamps) 
  }

  getProductsFloorLamps = async () => {
    const data = await this.getResource(this._apiProducts, '/products')
    return this._getProductsFilter(data, this._floorLamps) 
  }

  getProductsExteriorCeiling = async () => {
    const data = await this.getResource(this._apiProducts, '/products')
    return this._getProductsFilter(data, this._exteriorCeiling) 
  }

  getProductsInteriorCeiling = async () => {
    const data = await this.getResource(this._apiProducts, '/products')
    return this._getProductsFilter(data, this._interiorCeiling) 
  }

}