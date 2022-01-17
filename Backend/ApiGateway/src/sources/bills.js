const { RESTDataSource } = require('apollo-datasource-rest');
const serverUrls = require('../server');

class BillsApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverUrls.allBills
  }

  async CreateBills(credencials) {
    credencials = new Object(credencials);
    return await this.post(`/`, credencials)
  }

  async allBills() {
    return await this.get(`/?status=Open`)
  }

  async BillsKitchen() {
    return await this.get('/cocina')
  }

  async BillsById(input) {
    return await this.get(`/${input}`)
  }

  async BillsByClient(input) {
    return await this.get(`/cliente/${input}`)
  }


  async UpdateBill(credencials) {
    credencials = new Object(credencials);
    const idBill = credencials.id
    return await this.put(`/${idBill}`, credencials)
  }

  async PaidBill(input) {
    return await this.post(`/paid/${input}`)
  }

  async DeleteBill(input) {
    return await this.post(`/delete/${input}`)
  }

  async ClosedBill(input) {
    return await this.post(`/cocina/closed/${input}`)
  }



};

module.exports = BillsApi;



