import {
  gql
} from '@apollo/client';

const Tables = {

  BOOK_TABLES: gql`
   
   mutation BookTable($input: bookTable) {
    BookTable(input: $input) {
      message
      messagefinal
    }
  }
  
  `,

};


export default Tables