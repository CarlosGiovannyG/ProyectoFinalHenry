const { RESTDataSource } = require('apollo-datasource-rest');
const serverUrls = require('../server');

class TablesApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverUrls.allTables
  }


  async FreeTables(input) {
    return await this.get(`/schedule/${input.fecha}`)
  }
  
  async BookTable(credencials) {
    credencials = new Object(credencials);
    return await this.post(`/schedule/`, credencials)
  }
  
  
  
};

module.exports = TablesApi;



