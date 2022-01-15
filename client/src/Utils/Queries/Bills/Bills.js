import {
  gql
} from '@apollo/client';

const Bills = {

  ALL_BILLS: gql`
   query {
  allBills {
    numeroMesa
    statusCocina
    _id
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


  BILL_BY_ID: gql`

  query BillsById($input: billsId) {
  BillsById(input: $input) {
    numeroMesa
    statusCocina
    _id
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