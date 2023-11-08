const express = require("express");
const connectDB = require("./database");
require("dotenv").config();
const UserRouter = require("./api/User/user.routes");

const app = express();
// Define routes here
app.use(express.json());
//Connect to the DataBase
connectDB();

app.use("/User", UserRouter);

app.listen(process.env.PORT, () => {
  console.log(`App is running on localhost:${process.env.PORT}`);
});
