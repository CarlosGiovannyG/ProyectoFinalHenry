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

input loginUsers{
  email:String
  password:String
}

type responseLogin {
  message: String
  token:String
  rool:String
  userId:String
}

input userById{
  id:String
}

type responseUserById{
  id:String
  username:String
  name:String
  last_name:String
  email:String
  addres:String
  phone:String
  rool:String
  avatar:String
  image:String
  message:String

}


type Query{
LoginUsers(input:loginUsers):responseLogin
UserById(input:userById):responseUserById
}

type Mutation {
  RegisterUsers(input:userData):responseUsers
}
`;

module.exports = usersTypes; 

// {
// "input": {
// "username": "pruebaApollo",
// "name": "pruebaApollo",
// "last_name": "pruebaApollo",
// "email": "pruebaApollo@apollo.com",
// "addres": "pruebaApollo",
// "phone": "3043912387",
// "password": "pruebaApollo",
// "rool": "admin"
// }
// }