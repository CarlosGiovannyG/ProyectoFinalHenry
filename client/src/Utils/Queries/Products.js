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
      image
      public_id
      timestamps
    }
    resumen {
      stats {
        produts
        comments
        views
        rating
      }
      newComments {
        id
        title
        comment
        email
        timestamps
        avatar
        product_id
      }
      productsPopulated {
        _id
        name
        category
        description
        price
        rating
        views
        image
        public_id
        timestamps
      }
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
      image
      public_id
      timestamps
    }
  }
}
  `,


};


export default  Products