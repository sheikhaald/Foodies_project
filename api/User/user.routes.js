const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  signin,
} = require("./user.controllers");
const passport = require("passport");
const router = express.Router();

router.post("/signup", createUser); //Register

router.get("/", getAllUsers);
router.put("/:useID", updateUser);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
); // Login
module.exports = router;
