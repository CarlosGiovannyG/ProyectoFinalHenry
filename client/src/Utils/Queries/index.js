import Products from './Products/Products';
import Bills from './Bills/Bills';
import BillsClients from './Bills/BillsClients';
import BillsKitchen from './Bills/BillsKitchen';
import statsApp from './Stats/StatsApp';
import Comments from './Comments/Comments';


const Queries = { 
  
  //STATS_APP
  STATS_APP: statsApp.STATS_APP,
  
  //COMMENTS
  COMMENT_BY_PRODUCT: Comments.COMMENT_BY_PRODUCT,
  
  //PRODUCTS
  ALL_PRODUCTS: Products.ALL_PRODUCTS,
  FIND_PRODUCT: Products.FIND_PRODUCT,
  PRODUCTS_BILLS: Products.PRODUCTS_BILLS,

  //BILLS
  ALL_BILLS: Bills.ALL_BILLS,
  BILL_BY_ID: Bills.BILL_BY_ID,

  // BILLS CLIENTS
  BILL_BY_CLIENT: BillsClients.BILL_BY_CLIENT,

  // BILLS KITCHEN
  BILLS_KITCHEN: BillsKitchen.BILLS_KITCHEN,
}


export default Queries;