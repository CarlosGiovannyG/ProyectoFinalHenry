import {
  gql
} from '@apollo/client';

const Products = {

  ALL_PRODUCTS: gql `
   query {
   allProducts {
    products {
      _id
      name
      description
      category
      price
      rating
      views
      comments
      image
      public_id
      timestamps
    }
  }
  }
  
  `,

  PRODUCTS_BILLS: gql `
   query ProductsBills {
  ProductsBills {
    products {
      _id
      name
      price
    }
  }
}
  
  `,
  

  FIND_PRODUCT: gql`
  
  query findProduct($input: productId) {
  ProductById(input: $input) {
    product {
      _id
      name
      description
      category
      price
      rating
      views
      comments
      image
      public_id
      timestamps
    }
  }
}
  `,
 
  

};


export default  Products