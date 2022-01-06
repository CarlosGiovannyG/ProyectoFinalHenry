const { RESTDataSource } = require('apollo-datasource-rest');
const serverUrls = require('../server');

class ProductsApi extends RESTDataSource{

  constructor() {
    super();
    this.baseURL = serverUrls.allProducts
  }

  async allProducts() {
    const res = await this.get('/')
console.log('SOURCES',res);
    return await this.get('/')
  }

};

module.exports = ProductsApi;



