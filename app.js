const express = require("express");
const connectDB = require("./database");
require("dotenv").config();
const UserRouter = require("./api/User/user.routes");

const app = express();
const RecipeRouter = require("./api/Recipe/recipe.routes");
app.use(express.json());

// Define routes here

app.use("/recipe", RecipeRouter);

//Connect to the DataBase
connectDB();

app.use("/User", UserRouter);

app.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
