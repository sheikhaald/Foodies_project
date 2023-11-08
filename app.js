const express = require("express");
const connectDB = require("./database");
require("dotenv").config();
const app = express();
// Define routes here

//Connect to the DataBase
connectDB();
app.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
