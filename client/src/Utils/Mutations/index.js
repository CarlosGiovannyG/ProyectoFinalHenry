import Products from './Products/Products'
import Bills from './Bills/Bills'
import Comments from './Comments/Comments'
import UpdateBill from './Bills/UpdateBill';
import PaidBill from './Bills/PaidBill';
import Users from './Users/Users';
import Tables from './Tables/Tables';


const Mutations = {

  //PRODUCTS
  LIKE_PRODUCTS: Products.LIKE_PRODUCTS,

  //PRODUCTS
  CREATE_COMMENT: Comments.CREATE_COMMENT,

  //BILLS
  CREATE_BILL: Bills.CREATE_BILL,
  CLOSED_BILL: Bills.CLOSED_BILL,
  WORKING_BILL: Bills.WORKING_BILL,
  UPDATE_BILL: UpdateBill.UPDATE_BILL,
  PAID_BILL: PaidBill.PAID_BILL,
  DELETE_BILL: Bills.DELETE_BILL,

  //USERS
  REGISTER_USERS: Users.REGISTER_USERS,
  CHANGE_PASSWORD: Users.CHANGE_PASSWORD,
  CHANGE_INFO: Users.CHANGE_INFO,
  REGISTER_ADDRESS: Users.REGISTER_ADDRESS,

  //TABLES
  BOOK_TABLES: Tables.BOOK_TABLES,


};

export default Mutations;


//TODO:  INPUT REGISTRO DE DIRECCION
//
// {
//   "input": {
//     "userId": "61ece02d977bf7cd1a934511",
//       "name": "direccionApollo",
//         "description": "carrera 101"
//   }
// }