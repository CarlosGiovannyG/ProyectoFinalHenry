import {
  gql
} from '@apollo/client';

const Bills = {

  CREATE_BILL: gql`
  mutation CreateBills($input: createBill) {
  CreateBills(input: $input) {
    message
  }
}
  `,



};


export default Bills