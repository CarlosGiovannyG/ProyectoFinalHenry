const {
  gql
} = require('apollo-server');

const usersTypes = gql`


input userData{
 username: String
      name: String
      last_name: String
      email: String
      addres: String
      phone: String
      password:String
      rool: String
}

type responseUsers {
  message: String
}

type Mutation {
  RegisterUsers(input:userData):responseUsers

}

`;

module.exports = usersTypes;