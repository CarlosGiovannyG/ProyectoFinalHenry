import Products from './Products/Products';
import Bills from './Bills/Bills';
import BillsClients from './Bills/BillsClients';
import BillsChickend from './Bills/BillsChickend';


const Queries = { 
  
  //STATS_APP
  STATS_APP: Products.STATS_APP,
  
  //PRODUCTS
  ALL_PRODUCTS: Products.ALL_PRODUCTS,
  FIND_PRODUCT: Products.FIND_PRODUCT,

  //BILLS
  ALL_BILLS: Bills.ALL_BILLS,
  BILL_BY_ID: Bills.BILL_BY_ID,

  // BILLS CLIENTS
  BILL_BY_CLIENT: BillsClients.BILL_BY_CLIENT,

  // BILLS CHICKEND
  BILLS_CHICKEND:BillsChickend.BILLS_CHICKEND,
}


export default Queries;