import {
  gql
} from '@apollo/client';

const BillsKitchen = {

  BILLS_KITCHEN: gql`

query BillsKitchen {
  BillsKitchen {
    _id
    idUser
    description
    products {
      _id
      name
      price
    }
    date
    numeroMesa
    tipoDePedido
    statusCocina
    fechaEntrega
  }
}
  
  `,


};


export default BillsKitchen;