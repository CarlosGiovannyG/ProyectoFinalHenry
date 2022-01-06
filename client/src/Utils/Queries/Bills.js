import {
  gql
} from '@apollo/client';

const Bills = {

  ALL_BILLS: gql `
   query {
  allBills {
    idUser
    description
    products {
      idProduct
      name
      price
    }
    status
    date
    subTotal
    total
  }
  }
  
  `,

};


export default Bills