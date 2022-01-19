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

};

module.exports = UsersApi;