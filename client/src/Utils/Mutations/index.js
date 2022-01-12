import Products from './Products/Products'
import Bills from './Bills/Bills'
import Comments from './Comments/Comments'

const Mutations = {

  //PRODUCTS
  LIKE_PRODUCTS: Products.LIKE_PRODUCTS,

  //PRODUCTS
  CREATE_COMMENT: Comments.CREATE_COMMENT,

  //BILLS
  CREATE_BILL: Bills.CREATE_BILL,
  CLOSED_BILL: Bills.CLOSED_BILL,
};

export default Mutations;