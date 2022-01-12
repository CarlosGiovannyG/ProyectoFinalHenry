import {
  gql
} from '@apollo/client';

const Comments = {

  CREATE_COMMENT: gql`
   
  mutation CreateComment($input: createComment) {
   createComment(input: $input) {
    message
  }
}
  
  `,



};


export default Comments