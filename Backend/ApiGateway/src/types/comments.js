const { gql } = require('apollo-server');

const commentsTypes = gql`

input idProduct{ id: String }

type responseComment{
  comments:[comment]
}

type comment{
  _id:ID
  title:String
  comment:String
  timestamps:String
  avatar:String
}

type Query {
commentByProduct(input:idProduct):responseComment
}

`;

module.exports = commentsTypes;