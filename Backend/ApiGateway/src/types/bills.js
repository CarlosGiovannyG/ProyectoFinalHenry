
const { gql } = require('apollo-server');

const bilssTypes = gql`

input updateBill{ 
  id:ID
  idUser:String
  description:String
  products:[productsId]
  numeroMesa:Int
  tipoDePedido:String
  statusCocina:String
   subTotal: Int
  total: Int
}

input createBill{ 
  idUser:String
  description:String
  products:[productsId]
  numeroMesa:String
  tipoDePedido:String
  fechaEntrega:String
  subTotal: Int
  total: Int
}

input productsId{ 
  _id:String
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
  tipoDePedido:String
  date:String
  subTotal:Int
  total:Int
}

type billsKitchen{
  _id:ID
  idUser:String
  description:String
  products:[products]
  date:String
  numeroMesa:String
tipoDePedido:String
  statusCocina:String
}

type products{ 
  _id:String
  name:String
  price:Int
}


type billsCheckIn{
  sumatotal:String
  array:[productTotal]
  
}
type  productTotal{
name:String
  cantidad:Int
  total: Int
}
 


type Query {
allBills:[allBills]
BillsById(input:billsId):allBills
BillsByClient(input:billsId):[allBills]
BillsKitchen:[billsKitchen]
BillsCheckIn(input:billsId):billsCheckIn
}

type Mutation{
  CreateBills(input:createBill):response
  UpdateBill(input:updateBill):allBills
  ClosedBill(input:billsId):response
  WorkingBill(input:billsId):response
  PaidBill(input:billsId):response
  DeleteBill(input:billsId):response
}
`;

module.exports = bilssTypes;