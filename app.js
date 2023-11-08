const express = require("express");
const connectDB = require("./database");
require("dotenv").config();
const UserRouter = require("./api/User/user.routes");
const IngredientRouter = require("./api/Ingredient/ingredient.routes");

const app = express();
const RecipeRouter = require("./api/Recipe/recipe.routes");
app.use(express.json());

// Define routes here

app.use("/recipe", RecipeRouter);
app.use("/User", UserRouter);
app.use("/Ingredients", IngredientRouter);

//Connect to the DataBase
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
