import {
  gql
} from '@apollo/client';

const Users = {

  LOGIN_USERS: gql`
   query LoginUsers($input: loginUsers) {
  LoginUsers(input: $input) {
     message
    token
  }
}
  
  `,

  USER_BY_ID: gql`
   query UserById($input: userById) {
  UserById(input: $input) {
    id
    username
    name
    last_name
    email
    address {
      _id
      name
      street
      number
      city
    }
    phone
    rool
    avatar
    image
    message
  }
}
  
  `,

};


export default Users