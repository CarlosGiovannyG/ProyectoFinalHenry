const { RESTDataSource } = require('apollo-datasource-rest');
const serverUrls = require('../server');

class ProductsApi extends RESTDataSource{

  constructor() {
    super();
    this.baseURL = serverUrls.allProducts
  }

  async allProducts() {     
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



