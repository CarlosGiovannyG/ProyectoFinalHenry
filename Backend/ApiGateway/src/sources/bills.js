const { RESTDataSource } = require('apollo-datasource-rest');
const serverUrls = require('../server');

class BillsApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverUrls.allBills
  }

  async allBills() {
    return await this.get('/')
  }

  async BillsById(input) {
    let resp = await this.get(`/caja/${input}`)
    console.log('SOURCES' ,resp);
    return await this.get(`/caja/${input}`)
  }
};

module.exports = BillsApi;



