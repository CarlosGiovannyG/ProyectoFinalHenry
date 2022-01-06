const { gql } = require('apollo-server');

const productsTypes = gql`
type productsAll{
  products:[ProductDetail]
  resumen:resumen
}
type resumen{
stats:stats
newComments:[commentDetail]
productsPopulated:[ProductDetail]

}

type ProductDetail{
_id:ID
name:String
description:String
category:String
price:Int
rating:Int
views:Int
image:String
public_id:String
timestamps:String
}

type stats{
  produts:Int
  comments:Int
  views:Int
  rating:Int
}

type commentDetail{
_id:ID
title:String
comment:String
email:String
timestamps:String
avatar:String
product_id:String
}

type Query {
allProducts:productsAll
}


`;

module.exports = productsTypes;


