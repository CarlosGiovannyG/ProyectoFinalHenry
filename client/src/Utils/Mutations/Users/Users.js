import {
  gql
} from '@apollo/client';

const Users = {

  REGISTER_USERS: gql`
   
  mutation RegisterUsers($input: userData) {
  RegisterUsers(input: $input) {
    message
  }
}
  
  `,

  CHANGE_PASSWORD: gql`
   
  mutation ChangePassword($input: changePassword) {
   ChangePassword(input: $input) {
    message
  }
}
  
  `,

  CHANGE_INFO: gql`
   
  mutation ChangeInfo($input: changeInfo) {
  ChangeInfo(input: $input) {
    message
     blocking
  }
}
  
  `,


  REGISTER_ADDRESS: gql`
   
  mutation RegisterAddress($input: registerAddress) {
 RegisterAddress(input: $input) {
    message
    blocking
  }
}
  
  `,

};

export default Users 