import {
  gql
} from '@apollo/client';

const UpdateBill = {

  UPDATE_BILL: gql`
  mutation UpdateBill($input: updateBill) {
  UpdateBill(input: $input) {
    numeroMesa
    statusCocina
    _id
    idUser
    products {
      _id
      name
      price
    }
    description
    status
    tipoDePedido
    date
    subTotal
    total
  }
}
  `,



};


export default UpdateBill