const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  signin,
} = require("./user.controllers");
const passport = require("passport");
const upload = require("../../middleware/multer");
const router = express.Router();

router.post("/signup", upload.single("image"), createUser); //Register

router.get("/", getAllUsers);
router.put("/:useID", updateUser);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
); // Login
module.exports = router;
