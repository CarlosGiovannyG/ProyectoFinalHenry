const {
  gql
} = require('apollo-server');

const productsTypes = gql`

input productId{ id: ID }

type product{ product:ProductDetail }

type resLike { rating:Int }

type productsAll{ products:[ProductDetail] }

type statsPage{resumen:resumen}

type resumen{ stats:stats newComments:[commentDetail] productsPopulated:[ProductStats] productsViewed:[ProductStats]}

type productsBills{products:[ProductsBills]}

type ProductDetail{
_id:ID
name:String
description:String
category:String
price:Int
rating:Int
views:Int
comments:Int
image:String
public_id:String
timestamps:String

}

type ProductStats{
_id:ID
name:String
category:String
rating:Int
views:Int
image:String
}

type ProductsBills{
_id:ID
name:String
price:Int
}

type stats{produts:Int comments:Int views:Int rating:Int }

type commentDetail{ id:ID title:String comment:String email:String timestamps:String avatar:String product_id:String }

input createComment{
  product_id:String
  title:String
  comment:String
  email:String
}
type responseCreated{
  message:String
  blocking:String
}

type Query {
allProducts:productsAll
statsApp:statsPage
ProductsBills:productsBills
ProductById(input:productId):product
}

type Mutation {
  ProductLike(input:productId):resLike
  createComment(input:createComment):responseCreated
  DeleteProduct(input:productId):responseCreated

}

`;

module.exports = productsTypes;