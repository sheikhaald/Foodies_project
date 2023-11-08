const express = require("express");
const connectDB = require("./database");
require("dotenv").config();
const app = express();
const RecipeRouter = require("./api/Recipe/recipe.routes");
app.use(express.json());

// Define routes here

app.use("/recipe", RecipeRouter);

//Connect to the DataBase
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
