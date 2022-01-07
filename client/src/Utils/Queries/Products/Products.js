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
  
  STATS_APP: gql `
   query {
  statsApp {
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
        rating
        views
        image
      }
      productsViewed {
        _id
        name
        category
        rating
        views
        image
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