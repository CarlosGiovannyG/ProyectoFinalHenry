const {
  gql
} = require('apollo-server');

const usersTypes = gql`
input userData{
 username: String
      name: String
      last_name: String
      email: String
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
  _id:String
   name:String
  street:String
  number:String
  city:String
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
  name:String
  street:String
  number:String
  city:String
  userId: String
}

type responseAddressUserById{
address:[UserByIDaddress]
}

type UserByIDaddress{
   _id: String
   name: String
   street: String
   number:String
   city:String
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
