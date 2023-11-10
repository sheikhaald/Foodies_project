const express = require("express");
const {
  CreateUser,
  getAllUsers,
  UpdateUser,
  signin,
} = require("./user.controllers");
const passport = require("passport");
const router = express.Router();

router.post("/", CreateUser); //sign up
router.get("/", getAllUsers);
router.put("/:useID", UpdateUser);
router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
module.exports = router;
