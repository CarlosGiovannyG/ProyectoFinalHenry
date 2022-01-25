const { RESTDataSource } = require('apollo-datasource-rest');
const serverUrls = require('../server');

class UsersApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverUrls.allUsers
  }

  async RegisterUsers(credencials) {
    credencials = new Object(credencials);
    return await this.post(`/register`, credencials)
  }

  async LoginUsers(credencials) {
    credencials = new Object(credencials);
    return await this.post(`/login`, credencials)
  }

  async UserById(input) {

    return await this.get(`/${input.id}`)
  }

  async AddressUserById(input) {
    let resp = await this.get(`/address/${input.id}`)
    console.log(resp);
    return await this.get(`/address/${input.id}`)
  }

  async ChangePassword(credencials) {
    credencials = new Object(credencials);
    return await this.post(`/${credencials.id}/admin`, credencials)
  }

  async ChangeInfo(credencials) {
    credencials = new Object(credencials);
    return await this.post(`/${credencials.id}/info`, credencials)
  }

  async RegisterAddress(credencials) {
    credencials = new Object(credencials);
    return await this.post(`/${credencials.userId}/address`, credencials)
  }

};

module.exports = UsersApi;