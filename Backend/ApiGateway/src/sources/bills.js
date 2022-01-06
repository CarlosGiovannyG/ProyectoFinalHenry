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
    return await this.get(`/${input}`)
  }
  
  async BillsByClient(input) {
     return await this.get(`/cliente/${input}`)
  }
  
  async CreateBills(credencials) { 
    credencials = new Object(credencials);
    return await this.post(`/`,credencials)
  }
  
  async UpdateBill(credencials) { 
    credencials = new Object(credencials);
    const idBill = credencials.id
    return await this.put(`/${idBill}`,credencials)
  }
  
  async DeleteBill(input) {    
    return await this.post(`/delete/${input}`)
  }
  
  
  
};

module.exports = BillsApi;



