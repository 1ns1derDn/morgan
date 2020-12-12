export default class ServiceProducts {
  _apiProducts = 'https://morgan-shop.herokuapp.com';
  _apiCategories = 'https://morgan-shop.herokuapp.com';

  getResource = async (apiBaseUrl, url) => {
    const res = await fetch(`${apiBaseUrl}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getProducts = async () => {
    return await this.getResource(this._apiProducts, '/products')
  }

  getCategories = async () => {
    return await this.getResource(this._apiCategories, '/categories')
  }
}
