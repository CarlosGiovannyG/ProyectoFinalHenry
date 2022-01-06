// {
// "numeroMesa": 0,
// "statusCocina": "Open",
// "_id": "61d4d449bd0a23ca1df110a8",
// "idUser": "7",
// "description": "Una descripcion de prueba 2",
// "products": [
// {
// "idProduct": 900,
// "name": "Hotdog",
// "price": "20"
// }
// ],
// "status": "Prueba2",
// "date": "2022-01-04T22:05:42.911Z",
// "subTotal": 20,
// "total": 25,
// "__v": 0
// },

const { gql } = require('apollo-server');

const bilssTypes = gql`

input billsId{ id: ID }

type allBills{
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
BillsById(input:billsId):billsCaja
}


`;

module.exports = bilssTypes;