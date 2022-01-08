import {
  gql
} from '@apollo/client';

const Comments = {

  COMMENT_BY_PRODUCT: gql`

  query commentByProduct($input: idProduct) {
  commentByProduct(input: $input) {
    comments {
      _id
      title
      comment
      timestamps
      avatar
    }
  }
}
  
  `,



};


export default Comments