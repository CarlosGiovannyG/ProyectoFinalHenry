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
      idProduct
      name
      price
    }
    date
    numeroMesa
    tipoDePedido
    statusCocina
  }
}
  
  `,


};


export default BillsKitchen;