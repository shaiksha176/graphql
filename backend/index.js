import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema/schema.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

connectDB();

// Use express-graphql middleware with the schema
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Enable GraphiQL interface for testing
  }),
);

app.listen(port, console.log("server running on port ", port));
