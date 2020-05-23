const { ApolloServer } = require("apollo-server");
const typeDefs = require("./helpers/typeDefs");
const resolvers = require("./helpers/resolvers");
const PORT = process.env.PORT || 3000;

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen(PORT)
  .then(({ url }) => console.log("Apollo Server ready at: ", url))
  .catch((err) => console.log("Apollo server not connected ", err));
