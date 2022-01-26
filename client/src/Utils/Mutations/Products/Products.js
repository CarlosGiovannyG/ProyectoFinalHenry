import {
  gql
} from '@apollo/client';

const Products = {

  LIKE_PRODUCTS: gql`
   
  mutation ProductLike($input: productId) {
  ProductLike(input: $input) {
    rating
  }
}
  
  `,
  
 DELETE_PRODUCT: gql`
   
  mutation  DeleteProduct($input: productId) {
 DeleteProduct(input: $input) {
      message
      blocking
    }
}
  
  `,


};


export default Products