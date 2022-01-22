import {
  gql
} from '@apollo/client';

const Tables = {

  BOOK_TABLES: gql`
   
   mutation BookTable($bookTableInput2: bookTable) {
    BookTable(input: $bookTableInput2) {
      message
      messagefinal
    }
  }
  
  `,

};


export default Tables