
const { gql } = require('apollo-server');

const bilssTypes = gql`

input createBill{ 
  idUser:String
  description:String
  products:[productsId]
  numeroMesa:Int
  tipoDePedido:String
}

input productsId{ 
  idProduct:String
  name:String
  price:Int
}

input billsId{ id: ID }

type response{
  message:String
}

type allBills{
  numeroMesa:String
  statusCocina:String
  _id:ID
  idUser:String
  description:String
  products:[products]
  status:String
  date:String
  subTotal:Int
  total:Int
}


type products{ 
  idProduct:String
  name:String
  price:String
}

type billsCaja{
productos:caja
}

type caja{
  nombre:String
  cantidad:Int
  total:Int
}
 

type Query {
allBills:[allBills]
BillsById(input:billsId):allBills
BillsByClient(input:billsId):[allBills]
}

type Mutation{
  CreateBills(input:createBill):response
  DeleteBill(input:billsId):response
}
`;

module.exports = bilssTypes;