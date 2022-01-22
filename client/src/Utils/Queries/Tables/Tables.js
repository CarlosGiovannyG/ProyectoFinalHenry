import {
  gql
} from '@apollo/client';

const Tables = {

  FREE_TABLES: gql`
   query FreeTables($input: DateTime) {
    FreeTables(input: $input) {
      message
    arrmesas {
        mesa
        cap
      }
    }
  }
  
  `,

  

};


export default Tables