
const { RESTDataSource } = require('apollo-datasource-rest');
const serverUrls = require('../server');

class CommentsApi extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = serverUrls.allComments
  }

  async commentByProduct(input) {
    return await this.get(`/${input}`)
  }

};

module.exports = CommentsApi;



