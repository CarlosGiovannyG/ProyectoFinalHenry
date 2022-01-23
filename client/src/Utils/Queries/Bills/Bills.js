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
      _id
      name
      price
    }
    status
    tipoDePedido
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
      _id
      name
      price
    }
    status
    date
    subTotal
    total
    tipoDePedido
  }
}
  `,

  BILL_CHECK_IN: gql`
  query BillsCheckIn($input: billsId) {
  BillsCheckIn(input: $input) {
    sumatotal
    array {
      name
      cantidad
      total
    }
  }

}
  `,


};


export default Bills