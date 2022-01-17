import {
  gql
} from '@apollo/client';

const PaidBill = {

  PAID_BILL: gql`
  mutation PaidBill($input: billsId) {
   PaidBill(input: $input) {
    message
  }
}
  `,



};


export default PaidBill