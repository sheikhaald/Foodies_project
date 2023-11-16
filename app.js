const express = require("express");
const connectDB = require("./database");
require("dotenv").config();
const UserRouter = require("./api/User/user.routes");
const IngredientRouter = require("./api/Ingredient/ingredient.routes");
const path = require("path");
const passport = require("passport");
const app = express();
const RecipeRouter = require("./api/Recipe/recipe.routes");
const morgan = require("morgan");
const cors = require("cors");
const { NotFound } = require("./middleware/NotFound");
const { ErrorHandler } = require("./middleware/ErrorHandler");
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const CategoryRouter = require("./api/Category/category.routes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use(passport.initialize());
passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

// Define routes here

app.use("/Recipe", RecipeRouter);
app.use("/User", UserRouter);
app.use("/Ingredients", IngredientRouter);
app.use("/Categories", CategoryRouter);

// Not Found Path
app.use(NotFound);

// Error Handler
app.use(ErrorHandler);

//Connect to the DataBase
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
