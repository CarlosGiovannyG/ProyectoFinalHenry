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
  blocking:String
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

input changePassword{
  id:String
  currentPassword:String
  newPassword:String
}

input changeInfo{
  id:String
  username:String
  name:String
  last_name:String
  email:String
  addres:String
  phone:String
}

type Query{
LoginUsers(input:loginUsers):responseLogin
UserById(input:userById):responseUserById
}

type Mutation {
  RegisterUsers(input:userData):responseUsers
  ChangePassword(input:changePassword):responseUsers
  ChangeInfo(input:changeInfo):responseUsers
}
`;

module.exports = usersTypes;
