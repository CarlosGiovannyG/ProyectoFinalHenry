import Products from './Products';
import Bills  from './Bills'


const Queries = { 
  
  //PRODUCTS
  ALL_PRODUCTS: Products.ALL_PRODUCTS,
  FIND_PRODUCT: Products.FIND_PRODUCT,

  //BILLS
  ALL_BILLS: Bills.ALL_BILLS,
  BILL_BY_CLIENT: Bills.BILL_BY_CLIENT,
  BILL_BY_ID: Bills.BILL_BY_ID,

}


export default Queries;