const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    password: String
  }

  input InputUser {
    username: String!
    password: String!
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(user: InputUser): User
  }
`;

module.exports = typeDefs;
