const {
  gql
} = require('apollo-server');

const tablesTypes = gql`

input DateTime{
fecha:String
}

type freeTables{
  message:String
  arrmesas:[table]

}

input bookTable{
  fecha:String
  estamesa:String
  idclient:String
}

type bookTableOk{
  message:String
  messagefinal:String
}


type table{
mesa:Int
cap:Int
}

type Query {
FreeTables(input:DateTime):freeTables
}

type Mutation {
  BookTable(input:bookTable):bookTableOk
  
}

`;

module.exports = tablesTypes;