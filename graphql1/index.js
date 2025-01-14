import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, buildSchema } from "graphql";

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(8000, () => console.log("server running on port 8000"));
