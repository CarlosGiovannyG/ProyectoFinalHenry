import Products from './Products/Products';
import Bills from './Bills/Bills'
import BillsClients from './Bills/BillsClients'


const Queries = { 
  
  //PRODUCTS
  ALL_PRODUCTS: Products.ALL_PRODUCTS,
  FIND_PRODUCT: Products.FIND_PRODUCT,

  //BILLS
  ALL_BILLS: Bills.ALL_BILLS,
  BILL_BY_ID: Bills.BILL_BY_ID,

  // BILLS CLIENTS
  BILL_BY_CLIENT: BillsClients.BILL_BY_CLIENT,

}


export default Queries;