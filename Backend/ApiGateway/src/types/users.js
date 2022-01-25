const {
  gql
} = require('apollo-server');

const usersTypes = gql`
input userData{
 username: String
      name: String
      last_name: String
      email: String
      address_name: String
      address_description:String
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
  address:[addresUser]
  phone:String
  rool:String
  avatar:String
  image:String
  message:String

}

type addresUser{
  name:String
  description:String
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

input registerAddress {
  userId:String
  name:String
  description:String
}

type responseAddressUserById{
address:[UserByIDaddress]
}

type UserByIDaddress{
   _id: String
   name: String
   description: String
   userId: String
}

type Query{
LoginUsers(input:loginUsers):responseLogin
UserById(input:userById):responseUserById
AddressUserById(input:userById):responseAddressUserById
}

type Mutation {
  RegisterUsers(input:userData):responseUsers
  ChangePassword(input:changePassword):responseUsers
  ChangeInfo(input:changeInfo):responseUsers
  RegisterAddress(input:registerAddress):responseUsers
}
`;

module.exports = usersTypes;
