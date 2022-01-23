import {
  gql
} from '@apollo/client';

const Users = {

  LOGIN_USERS: gql`
   query LoginUsers($input: loginUsers) {
  LoginUsers(input: $input) {
     message
    token
    rool
    userId
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
      name
      description
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