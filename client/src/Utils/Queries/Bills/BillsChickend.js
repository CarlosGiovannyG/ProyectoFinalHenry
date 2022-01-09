import {
  gql
} from '@apollo/client';

const BillsChickend = {

  BILLS_CHICKEND: gql`

query BillsChickend {
  BillsChickend {
    _id
    idUser
    description
    products {
      name
    }
    date
    numeroMesa
    tipoDePedido
    statusCocina
  }
}
  
  `,


};


export default BillsChickend;