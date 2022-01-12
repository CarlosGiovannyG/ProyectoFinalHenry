import {
  gql
} from '@apollo/client';

const BillsClients = {

  BILL_BY_CLIENT: gql`

  query BillsByClient($input: billsId) {
  BillsByClient(input: $input) {
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


export default BillsClients;