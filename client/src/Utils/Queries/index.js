import Products from './Products';
import Bills  from './Bills'


const Queries = { 
  
  //PRODUCTS
  ALL_PRODUCTS: Products.ALL_PRODUCTS,
  FIND_PRODUCT: Products.FIND_PRODUCT,

  //BILLS
  ALL_BILLS: Bills.ALL_BILLS,
  BILL_BY_CLIENT:Bills.BILL_BY_CLIENT,

}


export default Queries;