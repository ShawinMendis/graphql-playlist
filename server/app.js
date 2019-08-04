const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  `mongodb+srv://shawin-mendis:<password>@cluster0-08ss5.mongodb.net/test?retryWrites=true&w=majority`
);
mongoose.connection.once("open", () => {
  console.log("connected to dtabase");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("now listening on port 4000");
});
