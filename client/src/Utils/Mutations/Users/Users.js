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

 

};


export default Users