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


  CLOSED_BILL: gql`

  mutation ClosedBill($input: billsId) {
  ClosedBill(input: $input) {
    message
  }
}
 
  `,

  WORKING_BILL: gql`

  mutation WorkingBill($input: billsId) {
  WorkingBill(input: $input) {
    message
  }
}
 
  `,



};


export default Bills