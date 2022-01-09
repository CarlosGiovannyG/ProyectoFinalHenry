const { RESTDataSource } = require('apollo-datasource-rest');
const serverUrls = require('../server');

class ProductsApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverUrls.allProducts
  }

  async createComment(credencials) {
    credencials = new Object(credencials);
    const idProd = credencials.product_id
    return await this.post(`/${idProd}/comment`, credencials)
  }

  async allProducts() {
    return await this.get('/')
  }

  async statsApp() {
    return await this.get('/')
  }

  async ProductsBills() {
    return await this.get('/')
  }

  async ProductById(input) {
    return await this.get(`/${input}`)
  }

  async ProductLike(input) {
    return await this.post(`/${input}/like`)
  }
};

module.exports = ProductsApi;



