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

  

};


export default Products