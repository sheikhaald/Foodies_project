const express = require("express");
const { CreateUser, getAllUsers, UpdateUser } = require("./user.controllers");
const router = express.Router();

router.post("/", CreateUser);
router.get("/", getAllUsers);
router.put("/:useID", UpdateUser);
module.exports = router;
