import {
  gql
} from '@apollo/client';

const statsApp = {

  STATS_APP: gql`
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


};


export default statsApp